
export let communities = [
    {
        location: ["CanadaMontreal",[45.55541047232767, -73.42859611607271]],
        status: "forming",
        members: 2,
        contact: ["https://discord.gg/xAPZmyr8B6","DiscordInviteLink"]
    },
    {
        location: ["EstoniaKohtlaJarve",[59.409521829709504, 27.288415912535914]],
        status: "forming",
        members: 2,
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh","WhatsAppInviteLink"]
    },
    {
        location: ["Latvia",[56.934159375258055, 25.269099001330265]],
        status: "forming",
        members: 1,
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh","WhatsAppInviteLink"]
    }
]

export function addMarkersCommunities(map,content) {
    for (let g of communities) {
        let coordinates
        let text = ""
        for (let field in g) {
            let fieldText = content[field] + ": "
            if (field=="contact") {
                text += fieldText + "<a href='" + g.contact[0] + "' target='_blank' rel=noreferrer>" + content[g.contact[1]]+ "</a>"
            }
            else if (field=="location") {
                text += fieldText + content[g[field][0]]+ "<br>"
                coordinates = g[field][1]
            }
            else if (field=="status") {
                text += fieldText + content[g[field]] + "<br>"
            }
            else {
                text += fieldText + g[field] + "<br>"
            }
        }
        var markerIcon = new L.Icon({
            iconUrl: 'https://www.libsoc.org/img/common/markers/marker-red.png',
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