<svelte:options tag="profile-groups" />

<script>

    // Import statements
    import { onMount, getContext } from 'svelte'
    import { writable } from 'svelte/store'
    import { getData } from "/js/libraries/serverTools.js"
    
    //Import components
    import "/js/components/select-component.js"
    import "/js/components/switch-component.js" 

    //Export statements
    export let groups = null

    // Main code
    let section
    let user_groups
    let content = writable({})
    let loaded = writable(0)

    let membersInput
    let saveMembersButton
    let membersInputDiv

    let contactInput
    let saveContactButton
    let contactInputDiv

    let locale = "en"

    let inputContact
    let inputMembers

    function groups_callback(response) {
        user_groups = JSON.parse(response)
        inputContact = getContact(user_groups[0].contact)
        inputMembers = user_groups[0].members
        loaded.update((val) => {
            return val + 1
        })
    }
    getData("/xx/get_user_groups",groups_callback)

    function getAddress(g) {
        let location = [g.country,g.state,g.town].filter(x => x!=null)
        return location.map(x => locale=="en" ? x : translate($content,x)).join(", ")
    }

    function getContact(c) {
        if (c==null) {
            return "https://discord.gg/Qk8KUk787z"
        }
        else {
            return c
        }
    }

    function launchChangeLocation() {
        showLocationOverlay()
    }

    function launchChangeMembers() {

    }

    function showSaveButton(button) {
        button.style.display = "initial"
    }

    function resetMembersField() {
        saveMembersButton.style.display = "none"
    }

    function resetContactField() {
        saveContactButton.style.display = "none"
    }

    function saveMembers() {
        let email = emailInput.value
        if (AuthTools.checkEmail(email,emailMsg)) {
            if (email!=user.email) {
                AuthTools.changeUser("email",email,user)
            }
            resetMembersField()
        }
    }

    function saveContact() {}

    let showLocationOverlay = getContext("profile-component")

    onMount(() => {

        document.addEventListener("click", function(event) {
            if (membersInputDiv.focused) {
                resetContactField()
            }
            else if (contactInputDiv.focused) {
                resetMembersField()
            }
            else {
                resetMembersField()
                resetContactField()
            }
        })
	})



</script>

{#key $loaded}
    {#if $loaded==1}
    
        <h2>Groups</h2>
        <h3>My group</h3>
        <section bind:this={section} class="entries-section">
            <div>
                <div class="change-field-line">
                    <span>Location:</span>
                    <div class="change-field-div">
                        <button class="change-field-button" on:click={launchChangeLocation}>{getAddress(user_groups[0])}
                            <object type="image/svg+xml" data="/img/profile/icons/pencil.svg" title="pencil-icon" class="pencil"></object>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div class="change-field-line">
                    <span>Members:</span>
                    <div bind:this={membersInputDiv} class="change-field-div input-pencil">
                        <button bind:this={saveMembersButton} class="save-button" on:click={saveMembers}>save</button>
                        <input bind:this={membersInput} id="membersInput" class="text-input" type="text" bind:value={inputMembers} on:click={() => showSaveButton(saveMembersButton)}>
                        <button class="text-input-pencil-button" on:click={() => membersInput.focus()}>
                            <object type="image/svg+xml" data="/img/profile/icons/pencil.svg" title="pencil-icon" class="pencil"></object>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div class="change-field-line">
                    <span>Contact:</span>
                    <div bind:this={contactInputDiv} class="change-field-div input-pencil">
                        <button bind:this={saveContactButton} class="save-button" on:click={saveContact}>save</button>
                        <input bind:this={contactInput} id="contactInput" class="text-input" type="text" bind:value={inputContact} on:click={() => showSaveButton(saveContactButton)}>
                        <button class="text-input-pencil-button" on:click={() => contactInput.focus()}>
                            <object type="image/svg+xml" data="/img/profile/icons/pencil.svg" title="pencil-icon" class="pencil"></object>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <h3>Requests</h3>
        <section bind:this={section} class="entries-section">
        
        </section>
    {/if}
{/key}


<style>
    @import '/css/common.css';

    .text-input-pencil-button {
        display: inline-block;
        position: relative;
        height: 2.3rem;
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
        bottom: 0.341rem;
        position: relative;
        top: 0.1rem;
        font-style: var(--sans-serif,sans-serif)
    }

    #membersInput {
        width: 5rem;
    }

    #contactInput {
        max-width: 18rem;
    }

    .save-button {
        position: relative;
        bottom: 0.34rem;
        margin-right: 0.6rem;
        height: 2.73rem;
        width: 4.778rem;
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.15rem;
        color: white;
        background-color: var(--red);
        border-color: var(--red);
        border-radius: 0.512rem;
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
    }

    .change-field-button {
        position: relative;
        cursor: pointer;
        height: 2.73rem;
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

    .entry-container {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .entry {
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.15rem; 
    }

    span {
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.15rem;
    }

    #groups-section {
        display: flex;
        flex-direction: column;
    }

    #groups-section h2 {
        margin: auto;
        margin-top: 0;
        margin-bottom: 0;
    }

</style>