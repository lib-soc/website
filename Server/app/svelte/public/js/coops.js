export let coops = [
    {
        logo: "chiron_logo",
        name: "Chiron Health",
        location: [["Estonia","KohtlaJarve"],[59.41038769769602, 27.287802936242034]],
        market:   "wellnessAndHealth",
        workers: 2,
        status: "inDevelopment",
        website: "chrn.health",
        contact: ["https://discord.gg/xAPZmyr8B6","DiscordInviteLink"],
        description: "descriptionChironHealth"
    },
    {
        logo: "kuusk_logo",
        name: "Kuusk",
        location: [["Estonia","KohtlaJarve"],[59.399947051803004, 27.277159931677055]],
        market: "herbalTeas",
        workers: 1,
        status: "inDevelopment",
        website: "-",
        contact: ["https://discord.gg/xAPZmyr8B6","DiscordInviteLink"],
        description: "kuuskDescription"
    }
]

export let coopsByCountry = {}
for (let g of coops) {
    let country = g.location[0][0]
    if (country in coopsByCountry) {
        coopsByCountry[country].push(g)
    }
    else {
        coopsByCountry[country] = [g]
    }
}

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
                let location = g[field][0]
                let town = location[1]=="" ? "" : ", " + content[location[1]]
                text += fieldText + content[location[0]] + town + "<br>"
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