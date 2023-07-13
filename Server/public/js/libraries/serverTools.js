
// Get data from server
export function getData(path,callback) {   
    var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
    xhr.open('GET', path, true);
    xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == "200") {
            if (callback !== undefined) {
                callback(xhr.responseText);
            }
          }
    };
    xhr.send(null);  
}

 // Parse JSON from given path into a given variable under a given key
 export function getJSON(variable,key,path) {
    getData(path,function(response) {
        // Parse JSON string into object
        variable[key] = JSON.parse(response);
    });
}

export function sendData(route,data,callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", route, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function() { 
        if(xhr.readyState === XMLHttpRequest.DONE) {
            var status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully
                if (callback !== undefined) {
                    callback(xhr.responseText)
                }
            } else {
                // Oh no! There has been an error with the request!
            }
            }
    };
    xhr.send(JSON.stringify(data))
}

export function sendText(route,data,callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", route, true)
    xhr.setRequestHeader('Content-Type', 'text/plain')
    xhr.onreadystatechange = function() { 
        if(xhr.readyState === XMLHttpRequest.DONE) {
            var status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully
                if (callback !== undefined) {
                    callback(xhr.responseText)
                }
            } else {
                // Oh no! There has been an error with the request!
            }
            }
    };
    xhr.send(data)
}

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

export let locales = {
    en: "English",
    ru: "Русский"
}

export function loadLocaleContent(content,componentName,loaded,callback) {
    let locale
    let langs
    let localesAvailable = Object.keys(locales)
    let localeUrl = location.href.split("/").filter(x => localesAvailable.includes(x))
    if (localeUrl.length>0) {
        locale = localeUrl
    }
    else {
        langs = navigator.languages.map(x => x.split("-")[0]).filter(onlyUnique)
        for (let lang of langs) {
            if (localesAvailable.includes(lang))  {
                locale = lang
            }
            break
        }
        if (locale==undefined) {
            locale = "en"
        }
    }
    getData("/locales/" + locale + "/" + componentName + ".json" ,function(response) {
        let parsed = JSON.parse(response)
        if (callback!=undefined) {
            callback(parsed)
        }
        content.update((obj) => {
            Object.assign(obj,parsed)
            return obj
        })
        loaded.update((val) => {
            return val + 1
        })
    })
    return locale
}