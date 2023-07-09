export let coops = [
    {
        logo: "chiron_logo",
        name: "Chiron Health",
        location: ["EstoniaKohtlaJarve",[59.40338782864918, 27.286240058760324]],
        market:   "wellnessAndHealth",
        workers: 2,
        status: "inDevelopment",
        website: "chrn.health",
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh","WhatsAppInviteLink"],
        description: "descriptionChironHealth"
    },
    {
        logo: "kuusk_logo",
        name: "Kuusk",
        location: ["EstoniaKohtlaJarve",[59.405466538976185, 27.289104862336302]],
        market: "herbalTeas",
        workers: 1,
        status: "inDevelopment",
        website: "-",
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh","WhatsAppInviteLink"],
        description: "kuuskDescription"
    }
]

export function addMarkersCoops(map,content) {
    for (let g of coops) {
        let coordinates
        let text = ""
        for (let field in g) {
            let fieldText
            if (field!="logo") {
                fieldText = content[field] + ": "
            }
            if (field=="logo") {
                text += "<picture><source srcset=" + "/img/coops/" + g.logo + ".webp><source srcset='/img/coops/" + g.logo + ".png'><img alt='logo' style='position: relative; max-height: 5rem; max-width: 100%; margin: auto;'></picture>" + "<br>"
            }
            else if (field=="contact") {
                text += fieldText + "<a href='https://www." + g.contact[0] + "' target='_blank' rel=noreferrer>" + content[g.contact[1]] + "</a>" + "<br>"
            }
            else if (field=="website") {
                text += fieldText + "<a href='" + g.website + "' target='_blank' rel=noreferrer>" + g.website + "</a>" + "<br>"
            }
            else if (field=="location") {
                text += fieldText + content[g[field][0]] + "<br>"
                coordinates = g[field][1]
            }
            else if (field=="market" || field=="status" || field=="description") {
                text += fieldText + content[g[field]] + "<br>"
            }
            else {
                text += fieldText + g[field] + "<br>"
            }
        }
        L.marker(coordinates).addTo(map).bindPopup(text)
    }
}