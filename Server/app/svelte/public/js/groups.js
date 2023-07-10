export let groups = [
    {
        location: ["CanadaHalifax",[44.65166135030067, -63.59289968306866]],
        members: 2,
        contact: ["https://discord.gg/xAPZmyr8B6","DiscordInviteLink"]
    },
    {
        location: ["DenmarkCopenhagen",[55.6840661150132, 12.557133959514688]],
        members: 1,
        contact: ["https://discord.gg/xAPZmyr8B6","DiscordInviteLink"]
    },
    {
        location: ["DenmarkKolding", [55.49261908652738, 9.470268969851743]],
        members: 1,
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh","WhatsAppInviteLink"]
    },
    {
        location: ["EstoniaKohtlaJarve", [59.40629447076191, 27.280605339416322]],
        members: 3,
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh","WhatsAppInviteLink"]
    },
    {
        location: ["GreeceAthens", [37.94877252621736, 23.677622972996158]],
        members: 1,
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh","WhatsAppInviteLink"]
    },
    {
        location: ["LatviaRiga", [56.94748425529816, 24.003027136431925]],
        members: 2,
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh","WhatsAppInviteLink"]
    },
]

export function addMarkersGroups(map,content) {
    for (let g of groups) {
        let coordinates
        let text = ""
        for (let field in g) {
            let fieldText = content[field] + ": "
            if (field=="contact") {
                text += fieldText + "<a href='" + g.contact[0] + "' target='_blank' rel=noreferrer>" + content[g.contact[1]] + "</a>"
            }
            else if (field=="location") {
                text += fieldText + content[g[field][0]] + "<br>"
                coordinates = g[field][1]
            }
            else {
                text += fieldText + g[field] + "<br>"
            }
        }
        var markerIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
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