<svelte:options tag="profile-groups" />

<script>

    // Import statements
    import { onMount, getContext } from 'svelte'
    import { writable } from 'svelte/store'
    import { getData, sendData } from "/js/libraries/serverTools.js"
    import { validatePosNumber } from "/js/libraries/miscTools.js"
    
    //Import components
    import "/js/components/select-component.js"
    import "/js/components/switch-component.js" 

    //Export statements

    // Main code
    let section
    let userGroups = []
    let groupsRequests = []
    let content = writable({})
    let loaded = writable(0)
    let keyRequests = 0
    let numLoaded = 2
    let mainPane
    let groupsAdd

    let membersInput
    let saveMembersButton
    let membersInputDiv

    let contactInput
    let saveContactButton
    let contactInputDiv

    let locale = "en"

    let oldValues = {
        "contact": null,
        "members": null,
    }

    let inputLocation
    let inputContact
    let inputMembers
    let pencilMembers
    let pencilContact
    let pencilButtonMembers
    let pencilButtonContact

    let myGroupLocation
    let myGroupStatus

    let context = getContext("profile-component")
    let maps = context.maps

    function groups_callback(response) {
        userGroups = JSON.parse(response)
        context["userGroups"] = userGroups
        loaded.update((val) => {
            return val + 1
        })
    }
    getData("/xx/get-user-groups",groups_callback)

    function requests_callback(response) {
        let parsed = JSON.parse(response)
        groupsRequests.push(...parsed)
        loaded.update((val) => {
            return val + 1
        })
    }
    getData("/xx/get-group-requests",requests_callback)

    function getAddress(g) {
        if (g!=undefined) {
            let location = [g.country,g.state,g.town].filter(x => x!=null)
            return location.map(x => locale=="en" ? x : translate($content,x)).join(", ")
        }
        else {
            return "Create or join group"
        }
    }

    function getContact(c) {
        if (c==null) {
            return "https://discord.gg/Qk8KUk787z"
        }
        else {
            return c
        }
    }

    function showSaveButton(button,input) {
        if (!input.readOnly) {
            button.style.display = "initial"
        }
    }

    function resetMembersField() {
        saveMembersButton.style.display = "none"
        inputMembers = oldValues["members"]
    }

    function resetContactField() {
        saveContactButton.style.display = "none"
        inputContact = oldValues["contact"]
    }

    function saveMembers() {
        let val = parseInt(membersInput.value)
        let data = {
            "members": val
        }
        sendData("/xx/group-change",data)
        oldValues["members"] = val
        saveMembersButton.style.display = "none"
    }

    function saveContact() {
        let val = contactInput.value
        let data = {
            "contact": val
        }
        sendData("/xx/group-change",data)
        oldValues["contact"] = val
        saveContactButton.style.display = "none"
    }

    function updateUserGroup(newInfo) {
        if (newInfo!=undefined) {
            myGroupLocation.innerHTML = getAddress(newInfo)
        }
    }

    function onLoadedGroups() {
        let els = [saveMembersButton,saveContactButton,membersInputDiv,contactInputDiv]
        if ($loaded==numLoaded && els.every(x => x!=undefined && x!=null)) {
            document.addEventListener("click", function(event) {
                let activeEl
                let shadowRoot = this.activeElement.shadowRoot
                if (shadowRoot!=null) {
                    activeEl = shadowRoot.activeElement
                    shadowRoot = activeEl.shadowRoot
                    if (shadowRoot!=null) {
                        activeEl = shadowRoot.activeElement
                    }
                }
                if (activeEl == membersInput || activeEl == saveMembersButton) {
                    resetContactField()
                }
                else if (activeEl == contactInput || activeEl == saveContactButton) {
                    resetMembersField()
                }
                else {
                    resetMembersField()
                    resetContactField()
                }
            })
            context["updateUserGroup"] = updateUserGroup
            inputLocation = getAddress(userGroups[0])
            if (userGroups.length==0) {
                inputContact = ""
                inputMembers = ""
            }
            else {
                let group = userGroups[0]
                
                inputContact = getContact(group.contact)
                oldValues["contact"] = inputContact
                inputMembers = group.members
                oldValues["members"] = inputMembers
                let status = group.status
                if (status!=undefined) {
                    if (status==0) {
                        myGroupStatus.innerHTML = "(pending)"
                        myGroupStatus.style.color = "#FFC90E"
                    }
                    else if (status==2) {
                        myGroupStatus.innerHTML = "(rejected)"
                        myGroupStatus.style.color = "#c52a28"
                    }
                    pencilMembers.style.display = "none"
                    pencilContact.style.display = "none"
                    pencilButtonContact.style.cursor = "default"
                    pencilButtonMembers.style.cursor = "default"
                    membersInput.readOnly = true
                    contactInput.readOnly = true
                }
            }
        }
        else {
            let f = () => onLoadedGroups()
            setTimeout(f, 100)
        }
    }

    function focus(el) {
        el.focus()
        el.click()
    }

    function approveRequest(ind,user_id) {
        sendData("/xx/group-approve-request",{user_id: user_id})
        groupsRequests.splice(ind,1)
        keyRequests = keyRequests + 1
    }

    function rejectRequest(ind,user_id) {
        sendData("/xx/group-reject-request",{user_id: user_id})
        groupsRequests.splice(ind,1)
        keyRequests = keyRequests + 1
    }
    
    function launchGroupsAdd() {
        groupsAdd.style.display = "block"
        mainPane.style.display = "none"
        if (maps["groupsAdd"]!=undefined) {
            maps["groupsAdd"].invalidateSize()
        }
    }

    function closeGroupsAdd() {
        groupsAdd.style.display = "none"
        mainPane.style.display = "block"
    }

    context["onLoadedGroups"] = onLoadedGroups
    context["launchGroupsAdd"] = launchGroupsAdd
    context["closeGroupsAdd"] = closeGroupsAdd

    onMount(() => {
        onLoadedGroups()
	})
</script>

{#key $loaded}
    {#if $loaded==numLoaded}
        <div bind:this={mainPane}>
            <h2>Groups</h2>
            <div>
                <h3 class="group-heading">My group</h3>
                <span bind:this={myGroupStatus} class="status"></span>
            </div>
            <section bind:this={section} class="entries-section">
                <div>
                    <div class="change-field-line">
                        <span>Location:</span>
                        <div class="change-field-div">
                            <button class="change-field-button" bind:this={myGroupLocation} on:click={launchGroupsAdd}>{inputLocation}
                                <object type="image/svg+xml" data="/img/profile/icons/pencil.svg" title="pencil-icon" class="pencil"></object>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="change-field-line">
                        <span>Members:</span>
                        <div bind:this={membersInputDiv} class="change-field-div input-pencil">
                            <div class="save-button-wrapper">
                                <button bind:this={saveMembersButton} on:click={saveMembers} class="save-button" style="display: none">save</button>
                            </div>
                            <input bind:this={membersInput} id="membersInput" class="text-input" type="number" bind:value={inputMembers} on:click={() => showSaveButton(saveMembersButton,membersInput)} on:input={(event) => validatePosNumber(event,membersInput,10000)}>
                            <button bind:this={pencilButtonMembers} class="text-input-pencil-button" on:click={() => {focus(membersInput)}}>
                                <object bind:this={pencilMembers} type="image/svg+xml" data="/img/profile/icons/pencil.svg" title="pencil-icon" class="pencil"></object>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="change-field-line">
                        <span>Contact:</span>
                        <div bind:this={contactInputDiv} class="change-field-div input-pencil">
                            <div class="save-button-wrapper">
                                <button bind:this={saveContactButton} on:click={saveContact} class="save-button" style="display: none">save</button>
                            </div>
                            <input bind:this={contactInput} id="contactInput" class="text-input" type="text" bind:value={inputContact} on:click={() => showSaveButton(saveContactButton,contactInput)}>
                            <button bind:this={pencilButtonContact} class="text-input-pencil-button" on:click={focus(contactInput)}>
                                <object bind:this={pencilContact} type="image/svg+xml" data="/img/profile/icons/pencil.svg" title="pencil-icon" class="pencil"></object>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <h3>Requests</h3>
            <section bind:this={section} class="entries-section">
                {#key keyRequests}
                    {#each groupsRequests as req,ind}
                        <div>
                            <div class="change-field-line">
                                <span>{req.email}</span>
                                <div class="request-button-wrapper">
                                    <button on:click={() => approveRequest(ind,req.user_id)} class="approve-button">approve</button>
                                    <button on:click={() => rejectRequest(ind,req.user_id)} class="approve-button" style="display:visible">reject</button>
                                </div>
                            </div>
                        </div>         
                    {/each}
                {/key}
            </section>
        </div>
        <!--Helper panes-->
        <groups-add-component  bind:this={groupsAdd} style="display: none;"></groups-add-component>
    {/if}
{/key}


<style>
    @import '/css/common.css';

    .request-button-wrapper {
        display: flex;
        gap: 1rem;
    }

    .approve-button {
        height: 2.7rem;
        padding: 0rem 1rem;
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.15rem;
        color: white;
        background-color: var(--red);
        border-color: var(--red);
        border-radius: 0.5rem;
        margin-top: -0.5rem;
    }

    .group-heading {
        display: inline-block;
    }

    .status {
        display: inline-block;
        font-size: 1.15rem;
        font-family: var(--sans-serif,sans-serif);
        margin-left: 0.5rem;
    }

    input {
        font-family: var(--sans-serif,sans-serif)
    }

    .text-input-pencil-button {
        display: inline-block;
        position: relative;
        height: 2.7rem;
        width: 2rem;
    }

    .text-input-pencil-button object {
        top: 0rem;
    }

    .pencil {
        pointer-events: none;
        position: absolute;
        width: 1.5rem;
        right: 0.0rem;
    }

    .change-field-div input.text-input {
        position: relative;
        width: 20.475rem;
        direction: rtl;
        border: 0;
        outline: none;
        height: 2.7rem;
        font-style: var(--sans-serif,sans-serif);
        background: transparent;
        margin-top: -0.5rem;
    }

    #membersInput {
        width: 5rem;
    }

    #contactInput {
        max-width: 18rem;
    }

    .save-button {
        position: absolute;
        right: 0;
        top: -0.4rem;
        margin-right: 0.6rem;
        height: 2.7rem;
        width: 5rem;
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.15rem;
        color: white;
        background-color: var(--red);
        border-color: var(--red);
        border-radius: 0.5rem;
    }

    .save-button-wrapper {
        display: inline-block; 
        position: relative; 
        height: 2rem;
    }

    h2 {
        text-align: center;
        margin-bottom: 0.5rem;
    }

    .entries-section {
        margin-bottom: 1rem;
    }

    .entries-section >div {
        height: 3.5rem;
        padding-bottom: 0.75rem;
        padding-top: 0.75rem;
        border-bottom: 0.14rem solid;
        border-color: #cdcdcd;
    }

    /* add padding to every line to center the diving line*/
    .entries-section >div:last-child {
        padding-bottom: 0.75rem;
        padding-top: 0.75rem;
        border-bottom: 0;
    }

     /*---Change field-------------------------------------------------------------------*/

    .change-field-line {
        display: flex;
        justify-content: space-between;
    }

    .change-field-div {
        width: max-content;
        position: relative;
        display: flex;
    }

    .change-field-button {
        position: relative;
        cursor: pointer;
        height: 2.7rem;
        font-size: 1.15rem;
        font-family: var(--sans-serif,sans-serif);
        font-weight: 500;
        text-align: right;
        padding-right: 1.9rem;
        margin-top: -0.55rem;
        background-color: transparent;
        width: 100%;
    }

        
    /*---General section-----------------------------------------------------------*/

    h3 {
        margin-bottom: 0.5rem;
    }
    span {
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.15rem;
    }


</style>