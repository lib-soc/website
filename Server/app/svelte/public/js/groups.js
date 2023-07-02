export let groups = [
    {
        location: [
            {
                en: "Denmark, Copenhagen",
                ru: "Дания, Копенгаген"
            },
        [55.6840661150132, 12.557133959514688]],
        members: 1,
        contact: ["https://discord.gg/xAPZmyr8B6",
        {
            en: "WhatsApp invite link",
            ru: "Discord ссылка"
        }]
    },
    {
        location: [
            {
                en: "Estonia, Kohtla-Järve",
                ru: "Эстония, Кохтла-Ярве"
            },
        [59.40629447076191, 27.280605339416322]],
        members: 3,
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh",
            {
                en: "WhatsApp invite link",
                ru: "WhatsApp ссылка"
            }]
    },
    {
        location: [
            {
                en: "Greece, Athens",
                ru: "Греция, Афины"
            },
            [37.94877252621736, 23.677622972996158]],
        members: 1,
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh",
            {
                en: "WhatsApp invite link",
                ru: "WhatsApp ссылка"
            }]
    },
    {
        location: [
            {
                en: "Latvia, Riga",
                ru: "Латвия, Рига"
            },
            [56.94748425529816, 24.003027136431925]],
        members: 2,
        contact: ["https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh",
            {
                en: "WhatsApp invite link",
                ru: "WhatsApp ссылка"
            }]
    },
]

export function addMarkersGroups(map,content,locale) {
    for (let g of groups) {
        let coordinates
        let text = ""
        for (let field in g) {
            let fieldText = content[field] + ": "
            if (field=="contact") {
                text += fieldText + "<a href='" + g.contact[0] + "' target='_blank' rel=noreferrer>" + g.contact[1][locale[0]] + "</a>"
            }
            else if (field=="location") {
                text += fieldText + g[field][0][locale[0]] + "<br>"
                coordinates = g[field][1]
            }
            else {
                text += fieldText + g[field] + "<br>"
            }
        }
        var greenIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
        let marker = L.marker(coordinates, {icon: greenIcon})
        marker.addTo(map).bindPopup(text)
    }
}