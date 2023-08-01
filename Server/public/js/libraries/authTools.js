
import {getData, sendData} from "/js/libraries/serverTools.js"

export function getUser(user,loaded,callbackOuter) {
    let callback = function(response) {
        Object.assign(user,JSON.parse(response))
        if(callbackOuter!=undefined) {
            callbackOuter()
        }
        loaded.update((val) => {
            return val + 1
        })
    }
    getData("/xx/get-user",callback)
}

export function changeUser(name,value,user) {
    if (user[name]!=value && user[name]!=undefined) {
        user[name] = value
        let data = new Object();
        data[name] = value
        sendData("/xx/change-user",data)
    }
}

export function changePasswordVisibility(button) {
    let input = button.previousElementSibling
    let type = input.type
    if (type=="text") {
        input.type = "password";
        button.style.opacity = 0.25
    }
    else {
        input.type = "text";
        button.style.opacity = 1
    }
}

export function checkEmail(email,msg) {
    if (email.includes("@")) {
        return true
    }
    else {
        msg.innerHTML = "must contain '@'"
        return false
    }
}

export function checkPassword(password,msg) {
    let passwordLength = password.length
    if (passwordLength<8) {
        msg.innerHTML = "must be 8 characters"
        return false
    }
    let numNumbers = password.match(/\d/g)?.length || 0;
    if (numNumbers<1) {
        msg.innerHTML = "mush have digits"
        return false
    }
    let numLetters = password.match(/\D/g)?.length || 0;
    if (numLetters<2) {
        msg.innerHTML = "must have letters"
        return false
    }
    return true
}

export function redirectLogged() {
    let callback = function(responseText) {
        let response = JSON.parse(responseText)
        if (response) {
            window.location.href = "/";
        }
    }
    getData("/xx/check-login",callback)
}

export function redirectNotLogged() {
    let callback = function(responseText) {
        let response = JSON.parse(responseText)
        if (!response) {
            window.location.href = "/";
        }
    }
    getData("/xx/check-login",callback)
}

// Redirect to the landing page
export function toLandingPage(response) {
    if (response!=0) {
        window.location.href = "/";
    }
}

// Redirect to the dashboard page
export function toDashboard() {
    window.location.href = "/";
}

// Process log in
export function processLoginResponse(response,msgs,remember) {
    if (response==0) {
        msgs.email.innerHTML = "not found"
    }
    else if (response==1) {
        msgs.password.innerHTML = "is wrong"
    }
    else {
        if (remember) {
            let date = new Date()
            date.setMonth(date.getMonth()+1)
            date = date.toUTCString()
            document.cookie = "__genierememberme=; expires=" + date + "; path=/;SameSite=Lax";
        }
        toDashboard()
    }
}

// Log in
export function login(msgs,inputs) {
    msgs.email.innerHTML = ""
    msgs.password.innerHTML = ""
    let data = {email: inputs.email.value, password: inputs.password.value, remember: inputs.remember.checked}
    sendData('/xx/login-post', data, (response) => processLoginResponse(response,msgs,inputs.remember.checked))
}

// Process sign in
function processSignupResponse(response,msgs) {
    if (response) {
        toDashboard()
    }
    else {
        msgs.email.innerHTML = "already exists"
    }
}

// Sign up
export function signup(msgs,inputs) {
    msgs.email.innerHTML = ""
    let email = inputs.email.value
    let password = inputs.password.value
    if (checkEmail(email,msgs.email)==false) {
        return
    }
    if (checkPassword(password,msgs.password)==false) {
        return
    }
    let data = {email: email, password: password}
    sendData('/xx/signup-post', data, (response) => processSignupResponse(response,msgs))
}

export function confirmEmail(msg,code,callback) {
    msg.innerHTML = ""
    sendData('xx/confirm-email',code,callback)
}

// Log out
export function logout() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "/logout", false ); // false for synchronous request
    xmlHttp.send( null );
    window.location.href = "/";
}