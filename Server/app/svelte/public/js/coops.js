export let coops = [
    {
        logo: "chiron_logo",
        name: "Chiron Health",
        location: [
            {
                en: "Estonia, Kohtla-Järve",
                ru: "Эстония, Кохтла-Ярве"
            },
            [59.40338782864918, 27.286240058760324]],
        market: {
            en: "wellness and health",
            ru: "благополучие и здоровье"
        },
        workers: 2,
        status: {
            en: "launch in 2 months",
            ru: "запуск через 2 месяца"
        },
        website: "chrn.health",
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh",
            {
                en: "WhatsApp invite link",
                ru: "WhatsApp ссылка"
            }],
        description: {
            en: "Chiron Health is a health platform providing courses and services on the topics of nutrition, exercise, sleep and mental wellbeing.",
            ru: "Chiron Health — это платформа о здоровье, предлагающая курсы и услуги по вопросам питания, физических упражнений, сна и психического благополучия"
        }
    },
    {
        logo: "kuusk_logo",
        name: "Kuusk",
        location: [
            {
                en: "Estonia, Kohtla-Järve",
                ru: "Эстония, Кохтла-Ярве"
            },
            [59.405466538976185, 27.289104862336302]],
        market: {
            en: "herbal teas",
            ru: "травяные чаи"
        },
        workers: 1,
        status: {
            en: "launch in TBD months",
            ru: "запуск через X месяцев"
        },
        website: "-",
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh",
            {
                en: "WhatsApp invite link",
                ru: "WhatsApp ссылка"
            }],
        description: {
            en: "Kuusk is an online store that sells herbal teas from exclusively local wild plants, as well as an online gathering course.",
            ru: "Kuusk — интернет-магазин, в котором продаются травяные чаи исключительно из местных дикорастущих растений, а также онлайн-курс по собирательству."
        }
    }
]

export function addMarkersCoops(map,content,locale) {
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
                text += fieldText + "<a href='https://www." + g.contact[0] + "' target='_blank' rel=noreferrer>" + g.contact[1][locale[0]] + "</a>" + "<br>"
            }
            else if (field=="website") {
                text += fieldText + "<a href='" + g.website + "' target='_blank' rel=noreferrer>" + g.website + "</a>" + "<br>"
            }
            else if (field=="location") {
                text += fieldText + g[field][0][locale[0]] + "<br>"
                coordinates = g[field][1]
            }
            else if (field=="market" || field=="status" || field=="description") {
                text += fieldText + g[field][locale[0]] + "<br>"
            }
            else {
                text += fieldText + g[field] + "<br>"
            }
        }
        L.marker(coordinates).addTo(map).bindPopup(text)
    }
}