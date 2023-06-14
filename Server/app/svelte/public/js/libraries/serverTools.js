
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

