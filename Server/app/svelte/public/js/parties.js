export let parties = [
    {
        logo: "roots",
        name: "Roots",
        location: ["Ireland",[52.98479517270413, -7.649233227534782]],
        //members: 6,
        link: "https://discord.gg/pSTMacJZsK",
        description: "descriptionRoots"
    }
]

export let partiesByCountry = {}
for (let g of parties) {
    let country = g.location[0]
    if (country in partiesByCountry) {
        partiesByCountry[country].push(g)
    }
    else {
        partiesByCountry[country] = [g]
    }
}

export function addMarkersParties(map,content) {
    for (let g of parties) {
        let coordinates
        let text = ""
        for (let field in g) {
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
                text += fieldText + content[g[field][0]] + "<br>"
                coordinates = g[field][1]
            }
            else if (field=="description") {
                text += fieldText + content[g[field]] + "<br>"
            }
            else {
                text += fieldText + g[field] + "<br>"
            }
        }
        var markerIcon = new L.Icon({
            iconUrl: 'https://www.libsoc.org/img/common/markers/marker-gold.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
        let marker = L.marker(coordinates, {icon: markerIcon})
        marker.addTo(map).bindPopup(text)
    }
}