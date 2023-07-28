import { translate } from "/js/libraries/mapTools.js"

export function addGroupPinContent(g,content,locale) {
    let coordinates
    let text = "<b>"+content["Group"]+"</b><br>"
    for (let field of ["location","members","contact"]) {
        let fieldText = content[field] + ": "
        if (field=="contact") {
            text += fieldText + "<a href='" + g.contact + "' target='_blank' rel=noreferrer>" + g.contact + "</a>"
        }
        else if (field=="location") {
            let location = [g.country,g.state,g.town].filter(x => x!=null && x!=undefined)
            let locationString
            if (locale=="en") {
                locationString = location.map(x => x).join(", ")
            }
            else {
                locationString = location.map(x => translate(content, x)).join(", ")
            }
            text += fieldText + locationString + "<br>"
            coordinates = [g.latitude,g.longitude]
        }
        else {
            text += fieldText + g[field] + "<br>"
        }
    }
    return {text,coordinates}
}

export function addCommunePinContent(g,content,locale) {
    let coordinates
    let text = "<b>"+content["Commune"]+"</b><br>"
    for (let field of ["location","status","members","contact"]) {
        let fieldText = content[field] + ": "
        if (field=="contact") {
            text += fieldText + "<a href='" + g.contact + "' target='_blank' rel=noreferrer>" + g.contact + "</a>"
        }
        else if (field=="location") {
            let location = [g.country,g.state,g.town].filter(x => x!=null && x!=undefined)
            let locationString
            if (locale=="en") {
                locationString = location.map(x => x).join(", ")
            }
            else {
                locationString = location.map(x => translate(content, x)).join(", ")
            }
            text += fieldText + locationString + "<br>"
            coordinates = [g.latitude,g.longitude]
        }
        else if (field=="status") {
            text += fieldText + content[g[field]] + "<br>"
        }
        else {
            text += fieldText + g[field] + "<br>"
        }
    }
    return {text,coordinates}
}

export function addCoopPinContent(g,content,locale) {
    let coordinates
    let text = "<b>"+content["Cooperative"]+"</b><br>"
    for (let field of ["logo","name","location","workers","status","website","contact","description"]) {
        let fieldText
        if (field!="logo") {
            fieldText = content[field] + ": "
        }
        if (field=="logo") {
            text += "<picture><source srcset=" + "/img/coops/" + g.logo + ".webp><source srcset='/img/coops/" + g.logo + ".png'><img alt='logo' style='position: relative; max-height: 5rem; max-width: 100%; margin: auto;'></picture>" + "<br>"
        }
        else if (field=="contact") {
            text += fieldText + "<a href='https://www." + g.contact + "' target='_blank' rel=noreferrer>" + g.contact + "</a>" + "<br>"
        }
        else if (field=="website") {
            text += fieldText + "<a href='" + g.website + "' target='_blank' rel=noreferrer>" + g.website + "</a>" + "<br>"
        }
        else if (field=="location") {
            let location = [g.country,g.state,g.town].filter(x => x!=null && x!=undefined)
            let locationString
            if (locale=="en") {
                locationString = location.map(x => x).join(", ")
            }
            else {
                locationString = location.map(x => translate(content, x)).join(", ")
            }
            text += fieldText + locationString + "<br>"
            coordinates = [g.latitude,g.longitude]
        }
        else if (field=="market" || field=="status" || field=="description") {
            text += fieldText + g[field] + "<br>"
        }
        else {
            text += fieldText + g[field] + "<br>"
        }
    }
    return {text,coordinates}
}

export function addPartyPinContent(g,content,locale) {
    let coordinates
    let text = "<b>"+content["Cooperative"]+"</b><br>"
    for (let field of ["logo","name","location","website","contact","description"]) {
        let fieldText
        if (field!="logo") {
            fieldText = content[field] + ": "
        }
        if (field=="logo") {
            text += "<picture><source srcset=" + "/img/parties/" + g.logo + ".webp><source srcset='/img/parties/" + g.logo + ".png'><img alt='logo' style='position: relative; max-height: 5rem; max-width: 100%; margin: auto;'></picture>" + "<br>"
        }
        else if (field=="link") {
            text += fieldText + "<a href='" + g.link + "' target='_blank' rel=noreferrer>" + g.link + "</a>" + "<br>"
        }
        else if (field=="website") {
            text += fieldText + "<a href='" + g.website + "' target='_blank' rel=noreferrer>" + g.website + "</a>" + "<br>"
        }
        else if (field=="location") {
            let location = [g.country,g.state,g.town].filter(x => x!=null && x!=undefined)
            let locationString
            if (locale=="en") {
                locationString = location.map(x => x).join(", ")
            }
            else {
                locationString = location.map(x => translate(content, x)).join(", ")
            }
            text += fieldText + locationString + "<br>"
            coordinates = [g.latitude,g.longitude]
        }
        else if (field=="description") {
            text += fieldText + content[g[field]] + "<br>"
        }
        else if (field=="contact") {
            text += fieldText + "<a href='" + g.contact + "' target='_blank' rel=noreferrer>" + g.contact + "</a>" + "<br>"
        }
        else {
            text += fieldText + g[field] + "<br>"
        }
    }
    return {text,coordinates}
}

export function addPartnersPinContent(g,content,locale) {
    let coordinates
    let text = "<b>"+content["Partner"]+"</b><br>"
    for (let field of ["logo","name","location","website","contact","description"]) {
        let fieldText
        if (field!="logo") {
            fieldText = content[field] + ": "
        }
        if (field=="logo") {
            text += "<picture><source srcset=" + "/img/coops/" + g.logo + ".webp><source srcset='/img/coops/" + g.logo + ".png'><img alt='logo' style='position: relative; max-height: 5rem; max-width: 100%; margin: auto;'></picture>" + "<br>"
        }
        else if (field=="contact") {
            text += fieldText + "<a href='https://www." + g.contact + "' target='_blank' rel=noreferrer>" + g.contact + "</a>" + "<br>"
        }
        else if (field=="website") {
            text += fieldText + "<a href='" + g.website + "' target='_blank' rel=noreferrer>" + g.website + "</a>" + "<br>"
        }
        else if (field=="location") {
            let location = [g.country,g.state,g.town].filter(x => x!=null && x!=undefined)
            let locationString
            if (locale=="en") {
                locationString = location.map(x => x).join(", ")
            }
            else {
                locationString = location.map(x => translate(content, x)).join(", ")
            }
            text += fieldText + locationString + "<br>"
            coordinates = [g.latitude,g.longitude]
        }
        else if (field=="description") {
            text += fieldText + g[field] + "<br>"
        }
        else {
            text += fieldText + g[field] + "<br>"
        }
    }
    return {text,coordinates}
}