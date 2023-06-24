export let coops = [
    {
        logo: "chiron_logo",
        name: "Chiron Health",
        location: ["Estonia, Kohtla-Järve",[59.40338782864918, 27.286240058760324]],
        market: "wellness and health",
        workers: 2,
        status: "launch in 2 months",
        website: "chrn.health",
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh","WhatsApp invite link"],
        description: "Chiron Health is a health platform providing courses and services on the topics of nutrition, exercise, sleep and mental wellbeing.",
    },
    {
        logo: "kuusk_logo",
        name: "Kuusk",
        location: ["Estonia, Kohtla-Järve",[59.405466538976185, 27.289104862336302]],
        market: "herbal teas",
        workers: 1,
        status: "launch in TBD months",
        website: "-",
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh","WhatsApp invite link"],
        description: "Kuusk is an online store that sells herbal teas from exclusively local wild plants, as well as an online gathering course.",
    }
]

export function addMarkersCoops(map) {
    for (let g of coops) {
        let coordinates
        let text = ""
        for (let field in g) {
            let fieldText = "<b>" + field[0].toUpperCase() + field.slice(1) + ": " + "</b>"
            if (field=="logo") {
                text += "<picture><source srcset=" + "/img/coops/" + g.logo + ".webp><source srcset='/img/coops/" + g.logo + ".png'><img alt='logo' style='position: relative; max-height: 5rem; max-width: 100%; margin: auto;'></picture>" + "<br>"
            }
            else if (field=="contact") {
                text += fieldText + "<a href='https://www." + g.contact[0] + "' target='_blank' rel=noreferrer>" + g.contact[1] + "</a>" + "<br>"
            }
            else if (field=="website") {
                text += fieldText + "<a href='" + g.website + "' target='_blank' rel=noreferrer>" + g.website + "</a>" + "<br>"
            }
            else if (field=="location") {
                text += fieldText + g[field][0] + "<br>"
                coordinates = g[field][1]
            }
            else {
                text += fieldText + g[field] + "<br>"
            }
        }
        L.marker(coordinates).addTo(map).bindPopup(text)
    }
}