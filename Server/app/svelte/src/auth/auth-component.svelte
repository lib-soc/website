<svelte:options tag="auth-component" />

<script>

    // Import statements
    import { onMount, setContext,getContext } from 'svelte'
    import { sendText } from "/js/libraries/serverTools.js"
    import * as AuthTools from "/js/libraries/authTools.js"
    import "/js/components/login-component.js" 
    import "/js/components/signup-component.js"

    // Main code
    AuthTools.redirectLogged()

    let loginComponent
    let signupComponent

    let context = {
        googleInit: false
    }
    setContext("auth",context)

    function switchFocus(component) {
        if (component==loginComponent) {
            loginComponent.focused = true
            signupComponent.focused = false
        }
        else {
            loginComponent.focused = false
            signupComponent.focused = true
        }
    }

    function callbackGoogle(data) {
        console.log(data)
        sendText("/signup-google",data.credential,(response) => AuthTools.processLoginResponse(response,context.msgs,context.remember.checked))
    }

    function initGoogle() {
        if (typeof google != 'undefined') {
            google.accounts.id.initialize({
                client_id: '93612176787-sr8qjqem4e3kok4msrnj8s1illt85a9g.apps.googleusercontent.com',
                callback: callbackGoogle,
                auto_select: true,
                context: "signin"
            })
            context.googleInit = true
        }
        else {
            setTimeout(initGoogle,100)
        }
    }

    initGoogle()

</script>

<div id="auth-group">
    <div id="auth-grid-group">
        <login-component bind:this={loginComponent} on:click={() => switchFocus(loginComponent)} on:keydown={() => ""}></login-component>
        <signup-component bind:this={signupComponent} on:click={() => switchFocus(signupComponent)} on:keydown={() => ""}></signup-component>
    </div>
    <div id="auth-or" class="pane">
        <span>OR</span>
    </div>
</div>

<style>
    @import '/css/common.css';

    span {
        font-size: 1.4rem;
        font-family: var(--sans-serif,sans-serif);
    }

    #auth-group {
        margin: auto;
        width: auto;
        margin-bottom: 3rem;
    }

    #auth-grid-group {
        display: grid;
        grid-template-columns: 30rem 30rem;
        justify-content: center;
        gap: 1.37rem;
        width: 100%;
    }

    #auth-or {
        display: flex;
        position: absolute;
        margin: auto;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 5.4rem;
        height: 5.4rem;
        border-radius: 6.8rem;
        background-color: white;
        align-items:center;
        justify-content:center;
        font-family: var(--sans-serif,sans-serif);
        font-weight: 500;
    }

    @media only screen and (max-width: 1200px) {
        #auth-grid-group {
            display: grid;
            grid-template-columns: 30rem;
            grid-template-rows: auto auto;
            justify-content: center;
            gap: 1.37rem;
            width: 100%;
        }

        #auth-or {
            top: 46.4rem;
        }

        #auth-group {
            margin-top: 2rem;
            margin-bottom: 3rem;
        }
    }


</style>