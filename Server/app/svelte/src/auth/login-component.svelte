<svelte:options tag="login-component" />

<script>

    // Import statements
    import { onMount, getContext } from 'svelte'
    import * as AuthTools from "/js/libraries/authTools.js"

    // Export statements
    export let focused = false

    // Main code

    let emailInput
    let passwordInput
    let inputs
    
    let passwordVisibilityButton

    let emailMsg
    let passwordMsg
    let msgs
    let rememberMe

    let googleButton

    let parentProps = getContext("auth")

    function renderGoogle() {
        if (parentProps.googleInit) {
            google.accounts.id.renderButton(googleButton,{ 
                theme: 'outline', 
                size: 'large'
            })
            let iframe = googleButton.getElementsByTagName('iframe')[0]
            iframe.style.height = "5rem"
            iframe.style.width = "5rem"
        }
        else {
            setTimeout(renderGoogle,100)
        }
    }

    onMount(() => {

        rememberMe.checked = true

        inputs = {email: emailInput, password: passwordInput, remember: rememberMe}
        msgs = {email: emailMsg, password: passwordMsg}

        parentProps.msgs = msgs
        parentProps.remember = rememberMe
        parentProps.loginGoogle = googleButton

        document.addEventListener("keypress", function(event) {
            if (event.code == "Enter") {
                if (focused) {
                    AuthTools.login(msgs,inputs)
                }
            }
        })

        renderGoogle()

	})
</script>

<div id="login-group"class="pane auth-pane">
    <h2 class="auth-title">LOG IN</h2>
    <label class="auth-label" for="emailInput">Email&nbsp;</label><span bind:this={emailMsg} id="email-msg"></span>
    <input bind:this={emailInput} id="emailInput" class="authEmailInput" type="email">
    <div class="password-field">
        <label class="auth-label" for="passwordInput">Password&nbsp;</label><span bind:this={passwordMsg} id="password-msg"></span>
        <input bind:this={passwordInput}  id="passwordInput" class="authPasswordInput" type="password">
        <button bind:this={passwordVisibilityButton} class="eye-icon" on:click="{() => AuthTools.changePasswordVisibility(passwordVisibilityButton)}">
            <object type="image/svg+xml" data="/img/auth/eye_icon.svg" title="eye icon"></object>
        </button>
    </div>
    <div id="remember-me">
        <input bind:this={rememberMe} type="checkbox" id="remember-me-checkbox"><label id="remember-me-label" for="passwordInput">remember me</label>
    </div>
    <button class="auth-button" on:click="{() => AuthTools.login(msgs,inputs)}">Log in</button>
    <a id="forgot-password" href="forgot-password"></a>
    <!--
    <hr class="auth-line">
    <div class="auth-methods-group">
        <div id="google-btn-wrapper">
            <div bind:this={googleButton} id="google-btn"></div>
            <img src="/img/auth/google_icon.svg" id="google-logo" alt="google icon">
        </div>
       
        <button on:click={openGoogleWindow}>
            <img src="img/auth/google_icon.svg" id="navbar-logo" alt="google icon">
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

<style>

    @import '/css/common.css';
    @import '/css/auth.css';
    
</style>