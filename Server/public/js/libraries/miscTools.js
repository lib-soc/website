
export function isObject(v) {
    return typeof v === 'object' && !Array.isArray(v) && v !== null
}

// Prevents excessive function calling
export function debounce(func, timeout){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout)
    }
}

export function svgFromObject(object) {
    var objectDoc = object.contentDocument;
    var svgItem = objectDoc.querySelector("path");
    return svgItem
}

export function rem2px(rem) {
    let fontSizeString = window.getComputedStyle(document.getElementsByTagName("html")[0]).getPropertyValue('font-size')
    let fontSize = parseFloat(fontSizeString.substring(0,fontSizeString.length-2))
    return fontSize * rem
}

export function px2rem(px) {
    let fontSizeString = window.getComputedStyle(document.getElementsByTagName("html")[0]).getPropertyValue('font-size')
    let fontSize = parseFloat(fontSizeString.substring(0,fontSizeString.length-2))
    return px / fontSize
}

/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 * 
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 * 
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
*/
export function getTextWidth(text, font) {
    // re-use canvas object for better performance
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
}

function getCssStyle(element, prop) {
    return window.getComputedStyle(element, null).getPropertyValue(prop);
}

export function getCanvasFont(el = document.body) {
    const fontWeight = getCssStyle(el, 'font-weight') || 'normal';
    const fontSize = getCssStyle(el, 'font-size') || '16px';
    const fontFamily = getCssStyle(el, 'font-family') || 'Times New Roman';
    
    return `${fontWeight} ${fontSize} ${fontFamily}`;
}

export function validateAge(event,input,callback) {
    event.returnValue = false
    var key
    if (event.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } 
    else {
        // Handle key press
        key = event.keyCode || event.which;
        key = String.fromCharCode(key);
    }
    let keys = ["0","1","2","3","4","5","6","7","8","9"]
    if (key in keys) {
        var val = parseFloat(input.value)
        if (val>120) {
            input.value = 120
        }
        else {
            input.value = val
        }
        if (callback!=undefined) {
            callback(input.value)
        }
    }
}

export function validatePosNumber(event,input,callback,max) {
    event.returnValue = false
    var key
    if (event.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } 
    else {
        // Handle key press
        key = event.data;
    }
    let keys = ["0","1","2","3","4","5","6","7","8","9"]
    if (key in keys) {
        var val = parseFloat(input.value)
        if (val>max) {
            input.value = max
        }
        if (callback!=undefined) {
            callback(input.value)
        }
    }
    else {
        callback(input.value)
    }
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}