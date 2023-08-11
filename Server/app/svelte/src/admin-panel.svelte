<svelte:options tag="admin-panel" />

<script>

    // Import statements
    import { onMount, getContext } from 'svelte'
    import { writable } from 'svelte/store'
    import { getData, sendData } from "/js/libraries/serverTools.js"

    //Import components
    import "/js/components/select-component.js"
    import "/js/components/switch-component.js" 
    import "/js/components/pane-aligner.js" 

    //Export statements

    // Main code
    let section
    let requests_verification = []
    let loaded = writable(0)
    let keyRequests = 0
    let numLoaded = 1
    let mainPane

    let context = getContext("profile-component")

    function requests_callback(response) {
        let parsed = JSON.parse(response)
        requests_verification.push(...parsed)
        loaded.update((val) => {
            return val + 1
        })
    }
    getData("/xx/get-unverified-users",requests_callback)

    function approveRequest(ind,user_id) {
        sendData("/xx/verify",{user_id: user_id})
        requests_verification.splice(ind,1)
        keyRequests = keyRequests + 1
    }

    function addVerified() {
        getData("/xx/add-verified-groups",() => "")
    }

    onMount(() => {
	})
</script>

{#key $loaded}
    {#if $loaded==numLoaded}
        <pane-aligner>
            <div bind:this={mainPane} slot="main">
                <h3>User verification</h3>
                <section bind:this={section} class="entries-section">
                    {#key keyRequests}
                        {#each requests_verification as req,ind}
                            <div>
                                <div class="change-field-line">
                                    <span>{req.email}</span>
                                    <div class="request-button-wrapper">
                                        <button on:click={() => approveRequest(ind,req.user_id)} class="default-button approve-button">Approve</button>
                                    </div>
                                </div>
                            </div>         
                        {/each}
                    {/key}
                    <button on:click={addVerified} id="add-verified-button" class="default-button">Add verified pins</button>
                </section>
            </div>
        </pane-aligner>
    {/if}
{/key}


<style>
    @import '/css/common.css';

    .request-button-wrapper {
        display: flex;
        gap: 1rem;
    }

    .default-button {
        height: 2.7rem;
        padding: 0rem 1rem;
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.15rem;
        color: white;
        background-color: var(--red);
        border-color: var(--red);
        border-radius: 0.5rem;
    }

    .approve-button {
        margin-top: -0.45rem;
    }

    #add-verified-button {
        margin-top: 1rem;
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
        
    /*---General section-----------------------------------------------------------*/

    h3 {
        margin-bottom: 0.5rem;
    }
    span {
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.15rem;
    }


</style>