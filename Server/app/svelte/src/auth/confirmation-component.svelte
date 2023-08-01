<svelte:options tag="confirmation-component" />

<script>

    // Import statements
    import { onMount } from 'svelte'
    import * as AuthTools from "/js/libraries/authTools.js"

    // Export statements
    
    // Main code
    let confirmationInputs = []
    let confirmationMsg
    let confirmationButton

    function onlyNumberKey(ind,evt) {
        // Only ASCII character in that range allowed
        var value = evt.data
        if (value in ["0","1","2","3","4","5","6","7","8","9"]) {
            if (ind<4) {
                confirmationInputs[ind+1].focus()
            }
            else {
                AuthTools.confirmEmail(confirmationMsg,getCode(),callback)
            }
        }
        else {
            confirmationInputs[ind].value = ""
        }
    }

    function getCode() {
        let code = ""
        for (let input of confirmationInputs) {
            code += input.value
        }
        return parseInt(code)
    }

    function callback(response) {
        if (response=="true") {
            AuthTools.toDashboard()
        }
        else {
            confirmationMsg.innerHTML = "Wrong code"
        }
    }

    onMount(() => {

	})
      
</script>

<div class="pane auth-pane">
    <h2 class="auth-title title-highlight">CONFIRMATION CODE</h2>
    <div id="confirmationInputs">
        <input bind:this={confirmationInputs[0]} class="authConfirmationInput" type="text" maxlength="1" on:input={(evt) => onlyNumberKey(0,evt)}><span class="dash">-</span>
        <input bind:this={confirmationInputs[1]} class="authConfirmationInput" type="text" maxlength="1" on:input={(evt) => onlyNumberKey(1,evt)}><span class="dash">-</span>
        <input bind:this={confirmationInputs[2]} class="authConfirmationInput" type="text" maxlength="1" on:input={(evt) => onlyNumberKey(2,evt)}><span class="dash">-</span>
        <input bind:this={confirmationInputs[3]} class="authConfirmationInput" type="text" maxlength="1" on:input={(evt) => onlyNumberKey(3,evt)}><span class="dash">-</span>
        <input bind:this={confirmationInputs[4]} class="authConfirmationInput" type="text" maxlength="1" on:input={(evt) => onlyNumberKey(4,evt)}>
    </div>
    <span bind:this={confirmationMsg} id="confirmation-msg"></span>
    <button bind:this={confirmationButton} class="auth-button" on:click="{() => AuthTools.confirmEmail(confirmationMsg,getCode(),callback)}">Confirm</button>
</div>

<style>

    @import '/css/common.css';

    .auth-pane {
        position: relative;
        padding: 3.4rem;
        padding-top: 5.5rem;
        padding-bottom: 5.5rem;
        width: 33rem;
        height: auto;
        margin: auto;
    }

    .auth-title {
        position: relative; 
        left: 0.7rem;
        top: 0.2rem;
        margin-bottom: 1.4rem;
    }

    .authConfirmationInput {
        position: relative;
        width: 3.16rem;
        font-family: var(--serif,serif);
        font-size: 3rem;
        border-radius: 0.34rem;
        margin-bottom: 0.7rem;
        text-align: center;
        padding-left: 0;
        padding-bottom: 0.3 rem;
    }

    .dash {
        display: block;
        font-size: 3rem;
        font-family: var(--serif,serif);
    }

    #confirmationInputs {
        margin: auto;
        display: grid;
        justify-content: space-between;
        grid-auto-flow: column;
    }

    .auth-button {
        margin-top: 1.4rem;
        height: 3.4rem;
        width: 100%;
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.6rem;
        color: white;
        background-color: var(--pink);
        border-color: var(--pink);
        border-radius: 0.5rem;
        filter: drop-shadow(0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4));
    }

    #confirmation-msg {
        display: inline;
        color:red;
    }
</style>