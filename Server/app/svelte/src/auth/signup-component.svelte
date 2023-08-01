<svelte:options tag="signup-component" />

<script>

    // Import statements
    import { onMount, getContext } from 'svelte'
    import * as AuthTools from "/js/libraries/authTools.js"

    // Export statements
    export let focused = false

    // Main code

    let signupGroup
    let emailInput
    let passwordInput
    let passwordVisibilityButton
    let inputs
    let googleButton

    let emailMsg
    let passwordMsg
    let msgs
    let rememberMe

    let dialog
    let signUp
    let signUpField

    let parentProps = getContext("auth")

    function removeMsg(msg) {
        if (msg.innerHTML!="") {
            msg.innerHTML = ""
        }
    }

    function showDialog() {
        dialog.style.display = "block"
    }

    function hide() {
        if (dialog!=null) {
            dialog.style.display = "none";
        }
    }

    function sendEmail() {
        let email = signUpField.value
        if (email.includes("@")) {
            sendText("/get-email",email)
            signUpField.value = ""
            signUpField.placeholder = "Subscribed!"
            signUpField.style.setProperty("--c", "hsl(147, 33%, 60%)")
        }
        else {
            signUpField.value = ""
            signUpField.placeholder = "must contain '@'"
            signUpField.style.setProperty("--c", "hsl(0, 100%, 60%)")
        }
    }

    function clearField() {
        signUpField.placeholder = ""
    }

    function renderGoogle() {
        if (parentProps.googleInit) {
            google.accounts.id.renderButton(googleButton,{ 
                theme: 'outline', 
                size: 'large'
            })
        }
        else {
            setTimeout(renderGoogle,100)
        }
    }

    onMount(() => { 

        rememberMe.checked = true
        inputs = {email: emailInput, password: passwordInput}
        msgs = {email: emailMsg, password: passwordMsg}

        document.addEventListener("keypress", function(event) {
            if (event.code == "Enter") {
                if (focused) {
                    AuthTools.signup(msgs,inputs,toLandingPage)
                }
            }
        })

        //renderGoogle()
	})

</script>

<div id="signup-group" class="pane auth-pane" bind:this={signupGroup}>
    <h2 class="auth-title">SIGN UP</h2>
    <label class="auth-label" for="emailInput">Email&nbsp;</label><span bind:this={emailMsg} id="email-msg" on:change={() => removeMsg(emailMsg)}></span>
    <input bind:this={emailInput} id="emailInput" class="authEmailInput" type="email">
    <div class="password-field">
        <label class="auth-label" for="emailInput">Password&nbsp;</label><span bind:this={passwordMsg} id="password-msg"></span>
        <input bind:this={passwordInput} id="passwordInput" class="authPasswordInput" type="password" on:change={() => removeMsg(passwordMsg)}>
        <button bind:this={passwordVisibilityButton} class="eye-icon" on:click="{() => AuthTools.changePasswordVisibility(passwordVisibilityButton)}">
            <object type="image/svg+xml" data="/img/auth/eye_icon.svg" title="eye-icon"></object>
        </button>
    </div>
    <div id="remember-me">
        <input bind:this={rememberMe} type="checkbox" id="remember-me-checkbox"><label id="remember-me-label" for="passwordInput">remember me</label>
    </div>
    <button class="auth-button" on:click="{AuthTools.signup(msgs,inputs,AuthTools.toLandingPage)}">Sign up</button> <!--() => AuthTools.signup(msgs,inputs,AuthTools.toLandingPage)-->
    <p id="forgot-password"></p>
    <!--
    <hr class="auth-line">
    <div class="auth-methods-group">
        <button on:click="{showDialog}">
            <img src="/img/auth/google_icon.svg" id="navbar-logo" alt="google icon">
        </button>
        <button onclick="">
            <img src="img/auth/facebook_icon.svg" id="navbar-logo" alt="facebook icon">
        </button>
        <button onclick="">
            <img src="img/auth/linkedin_icon.svg" id="navbar-logo" alt="linkedin icon">
        </button>
    </div>
    -->
</div>

<div bind:this={dialog} id="dialog">
    <button id="shadow" on:click={hide}></button>
    <div id="wrapper" class="pane">
        <h2>Registration is closed</h2>
        <p>We are still in the process of opening.</p>
        <p>Sign up for updates to know when it becomes available:</p>
        <div id="newsletter-container">
            <input bind:this={signUpField}  on:click={clearField} id="newsletterEmailInput" type="text">
            <button bind:this={signUp} on:click={sendEmail} id="newsletterEmailButton">sign up</button>
        </div>
        <button id="no-button" on:click={hide}>No thanks</button>
    </div>
</div>

<style>

    @import '/css/common.css';
    @import '/css/auth.css';

    #dialog {
        display: none;
    }

    #wrapper p {
        text-align: justify;
    }

    #wrapper h2 {
        text-align: center;
        margin-bottom: 1rem;
    }

    #shadow {
        position: fixed;
        cursor: default;
        top: 50%; right: 50%;
        transform: translate(50%,-50%);
        width: 100vw;
        height: 100vh;
        background:rgb(0, 0, 0, 0.2);
        z-index: 999999;
    }

    #newsletter-container {
        position: relative;
        height: 3rem;
        width: 100%;
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
    }

    #newsletterEmailInput {
        height: 2.5rem;
        border-radius: 0.2rem 0 0 0.2rem;
        filter: drop-shadow( 0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4));
        flex-grow: 1;
    }

    #newsletterEmailInput::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: var(--c,gray);
        opacity: 1; /* Firefox */
    }  

    #newsletterEmailButton {
        width: 6.8rem;
        height: 2.5rem;
        background: var(--pink);
        color: #ffffff;
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.4rem;
        border-radius: 0 0.2rem 0.2rem 0;
        filter: drop-shadow( 0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4));
    }

    #newsletterEmailButton:active {
        background: var(--darker-pink);
    }

    #wrapper {
        top: 50%; right: 50%;
        transform: translate(50%,-50%);
        position: fixed;
        max-width: 36rem;
        width: 90vw;
        padding: 2rem 4rem;
        z-index: 1999999;
    }

    #wrapper * {
        font-family: var(--sans-serif);
    }
 
    #no-button {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 13rem;
        height: 3rem;
        margin-top: 2rem;
        margin-bottom: 0.5rem;
        background: #ffffff;
        border: 0.2rem solid var(--pink);
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.4rem;
        border-radius: 0.5rem;
        filter: drop-shadow( 0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4));
    }

    #no-button:active {
        background: hsl(343, 23%, 82%);
    }

</style>