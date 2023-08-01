<svelte:options tag="profile-general" />

<script>

    // Import statements
    import { onMount, getContext } from 'svelte'
    import * as AuthTools from "/js/libraries/authTools.js"
    
    //Import components
    import "/js/components/select-component.js"
    import "/js/components/switch-component.js" 

    //Export statements

    // Main code
    let emailInput
    
    let section
    let saveEmailButton
    let changePasswordInputDiv
    let changePasswordMsg
    let savePasswordButton
    let passwordInput
    let changePasswordDiv
    let passwordVisibilityButton
    let emailMsg
    let passwordDiv
    let emailDiv
    let emailInputDiv
    let prevEmail

    let context = getContext("profile-component")
    let user = context.user

    function showSaveButton(button) {
        prevEmail = emailInput.value
        button.style.display = "initial"
        emailMsg.style.display = "inline"
        let windowWidth = window.innerWidth
        if (windowWidth<1100) {
            emailInputDiv.style.marginTop = "1rem"
            emailDiv.style.flexDirection = "column"
        }
        else {
            //emailInput.style.width = "19rem"
        }
    }

    function saveEmail() {
        let email = emailInput.value
        if (AuthTools.checkEmail(email,emailMsg)) {
            if (email!=user.email) {
                AuthTools.changeUser("email",email,user)
            }
            resetEmailField()
        }
    }

    function resetEmailField() {
        if (prevEmail!=undefined) {
            emailInput.value = prevEmail
        }
        emailInput.style.width = "100%"
        emailMsg.style.display = "none"
        emailDiv.style.flexDirection = "row"
        emailInputDiv.style.marginTop = "0rem"
        saveEmailButton.style.display = "none"
        emailMsg.innerHTML = ""
    }

    function launchChangePassword() {
        let windowWidth = window.innerWidth
        if (windowWidth<1100) {
            changePasswordInputDiv.style.display = "flex";
        }
        else {
            changePasswordInputDiv.style.display = "initial";
        }
        changePasswordDiv.style.display = "none";
        passwordInput.focus()
    }

    function savePassword() {
        let password = passwordInput.value
        if (AuthTools.checkPassword(password,changePasswordMsg)) {
            if (password!=user.password) {
                AuthTools.changeUser("password",password,user)
            }
            changePasswordMsg.innerHTML = ""
            resetPasswordField()
        }
    }

    function resetPasswordField() {
        changePasswordInputDiv.style.display = "none";
        changePasswordDiv.style.display = "initial";
        changePasswordMsg.innerHTML = ""
    }

    function fillFields() {
        if (user!=null && Object.keys(user).length!=0 && section!=undefined) {
            emailInput.value = user.email
        }
        else {
            setTimeout(fillFields, 10)
        }
    }

    function resizeInput(el) {
        el.nextElementSibling.innerHTML = el.value
    }

    onMount(() => {

        fillFields()

        document.addEventListener("click", function(event) {
            if (passwordDiv.focused) {
                resetEmailField()
            }
            else if (emailDiv.focused) {
                resetPasswordField()
            }
            else {
                resetEmailField()
                resetPasswordField()
            }
        })
	})



</script>

<section bind:this={section} id="general-section">
    <h2 class="title-highlight">General</h2>
    <div bind:this={emailDiv} on:mouseenter={emailDiv.focused=true} on:mouseleave={emailDiv.focused=false}>
        <div class="title-msg">
            <span>Email:</span>
            <span bind:this={emailMsg} id="signup-email-msg"></span>
        </div>
        <div bind:this={emailInputDiv} id="emailInputDiv">
            <button bind:this={saveEmailButton} id="save-email" class="save-button" on:click={saveEmail}>save</button>
            <div class="input-wrapper">
                <input bind:this={emailInput} id="emailInput" class="text-input" type="text" on:click={() => showSaveButton(saveEmailButton)}  on:input={() => resizeInput(emailInput)}>
                <div class="ghost-input"></div>
            </div>
        </div>
    </div>
    <div bind:this={passwordDiv} on:mouseenter={passwordDiv.focused=true} on:mouseleave={passwordDiv.focused=false} id="change-password-line-wrapper">
        <div id="change-password-line">
            <div class="title-msg">
                <span>Password:</span>
                <span bind:this={changePasswordMsg} id="signup-password-msg"></span>
            </div>
            
            <div bind:this={changePasswordDiv} id="change-password-div">
                <button id="change-password" on:click={launchChangePassword}>change
                    <object type="image/svg+xml" data="/img/profile/icons/pencil.svg" title="pencil-icon"></object>
                </button>
            </div>
        </div>
        <div bind:this={changePasswordInputDiv} id="change-password-input-div">
            <button bind:this={savePasswordButton} id="save-password" class="save-button" on:click={savePassword}>save</button>
            <input bind:this={passwordInput} id="passwordInput" class="text-input" type="password">
            <button bind:this={passwordVisibilityButton} class="eye-icon" on:click="{() => AuthTools.changePasswordVisibility(passwordVisibilityButton)}">
                <object type="image/svg+xml" data="/img/auth/eye_icon.svg" title="eye icon"></object>
            </button>
        </div>
    </div>
    <div>
        <div id="verifiedDiv">
            <span>Verified:</span>
            <span style="color: {user.verified ? "green" : "red"}">{user.verified}</span>
        </div>
    </div>
</section>

<style>
    @import '/css/common.css';
        
    #verifiedDiv {
        display: inline;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 2rem;
        width: 100%;
    }

    /*---General section-----------------------------------------------------------*/

    .ghost-input {
        display: block;
        visibility: hidden;
        height: 0;
        
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .input-wrapper {
        display: inline-block;
        max-width: calc(100% - 10rem);
        min-width: 0rem;
        height: 2.5rem;
        position: relative;
        right: 0
    }

    span {
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.15rem;
    }

    #general-section {
        display: flex;
        flex-direction: column;
    }

    #general-section h2 {
        margin: auto;
        margin-top: 0;
        margin-bottom: 0;
    }

    #general-section >div {
        height: 3.5rem;
        padding-bottom: 0.75rem;
        padding-top: 0.75rem;
        border-bottom: 0.14rem solid;
        border-color: #cdcdcd;
    }

    #general-section >div >:first-child {
        font-family: var(--sans-serif,sans-serif);
    }

    /* add padding to every line to center the diving line*/
    #general-section >div:last-child {
        padding-bottom: 0.75rem;
        padding-top: 0.75rem;
        border-bottom: 0;
    }

    #general-section >div div,
    #general-section >div input, 
    #general-section >div :not(:first-child) input {
        font-weight: 500;
        font-size: 1.15rem;
        font-family: var(--sans-serif,sans-serif);
        color: #292222;
        border: 0;
    }

    #general-section >div>:last-child {
        padding-right: 1.35rem;
    }

    .text-input {
        position: relative;
        width: 20.475rem;
        direction: rtl;
        border: 0;
        outline: none;
        bottom: 0.341rem;
    }


    /*---Email-------------------------------------------------------------------*/

    #emailInput {
        position: relative;
        right: 0;
        top: 0.1rem;
        width: 100%;
    }

    #save-email {
        display: none;
        margin-top: 0.5rem;
    }

    #signup-email-msg,
    #signup-password-msg {
        position: relative;
        display: inline-block;
        color:red;
        font-weight: 400;
        white-space: nowrap;
    }

    #signup-email-msg {
        display: none;
    }

    #general-section >div:nth-child(2) {
        display: flex;
        flex-direction: row;
    }

    #emailInputDiv {
        display: flex;
        flex-direction: row;
        justify-content: right;
        align-items: center;
        height: 2rem;
        width: 100%;
    }

    .title-msg {
        display: flex;
        gap: 0.5rem;
    }

    .title-msg * {
        text-align: left;
    }

    /*---Change password-------------------------------------------------------------------*/

    #change-password-line {
        display: flex;
        justify-content: space-between;
    }

    #change-password-div {
        width: 9.3rem;
        left: 0;
    }

    #change-password {
        position: absolute;
        cursor: pointer;
        width: 8rem;
        height: 2.73rem;
        font-size: 1.15rem;
        font-family: var(--sans-serif,sans-serif);
        font-weight: 500;
        text-align: right;
        padding-right: 2rem;
        margin-top: -0.55rem;
        background-color: transparent;
    }

    #change-password > object {
        pointer-events: none;
        position: absolute;
        width: 1.5rem;
        right: 0.0rem;
    }

    #change-password-input-div {
        display: none;
        float: right;
        position: relative;
        margin-top: -1.7rem;
    }

    #passwordInput {
        width: 15rem;
        right: 0.65rem;
        margin-left: 1.5rem;
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
    
    #save-password {
        bottom: 0.6rem
    }

    .eye-icon {
        display: inline-block;
        position: relative;
        cursor: pointer;
        opacity: 0.25;
       height: 2.2rem;
        width: 1.7rem;
    }

    .eye-icon * {
        pointer-events: none;
    }

    
    @media only screen and (max-width: 1100px) {

        #change-password-line-wrapper {
            display: flex;
            flex-direction: column;
            height: auto;
            min-height: 4rem;
        }

        #change-password-input-div {
            margin-top: 1rem;
            justify-content: flex-end;
        }

        #general-section >div:nth-child(2) {
            height: auto;
            min-height: 4rem;
            position: relative;
        }

        #passwordInput {
            width: 100%;
            bottom: 0;
        }

        #emailInput {
            width: 100%;
        }

        #save-password {
            bottom: 0rem
        }
    }

</style>