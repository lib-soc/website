export let groups = [
    {
        location: [["Bulgaria","Varna"],[43.21582161671174, 27.89896092161012]],
        members: 1,
        contact: ["https://discord.gg/Qk8KUk787z","DiscordInviteLink"]
    },
    {
        location: [["Canada","Halifax"],[44.65166135030067, -63.59289968306866]],
        members: 2,
        contact: ["https://discord.gg/Qk8KUk787z","DiscordInviteLink"]
    },
    {
        location: [["Canada","Toronto"], [43.6960589794647, -79.37396957644577]],
        members: 1,
        contact: ["https://discord.gg/Qk8KUk787z","DiscordInviteLink"]
    },
    {
        location: [["Denmark","Copenhagen"],[55.6840661150132, 12.557133959514688]],
        members: 1,
        contact: ["https://discord.gg/Qk8KUk787z","DiscordInviteLink"]
    },
    {
        location: [["Denmark","Kolding"], [55.49261908652738, 9.470268969851743]],
        members: 1,
        contact: ["https://discord.gg/Qk8KUk787z","DiscordInviteLink"]
    },
    {
        location: [["Estonia","Kohtla-Järve"], [59.40629447076191, 27.280605339416322]],
        members: 3,
        contact: ["https://discord.gg/Qk8KUk787z","DiscordInviteLink"]
    },
    {
        location: [["Estonia","Tallinn"], [59.39180354687856, 24.72304565687877]],
        members: 1,
        contact: ["https://discord.gg/Qk8KUk787z","DiscordInviteLink"]
    },
    {
        location: [["Germany","Wiesbaden"], [50.07459620869791, 8.234984059337897]],
        members: 1,
        contact: ["https://discord.gg/Qk8KUk787z","DiscordInviteLink"]
    },
    {
        location: [["Greece","Athens"], [37.94877252621736, 23.677622972996158]],
        members: 1,
        contact: ["https://discord.gg/Qk8KUk787z","DiscordInviteLink"]
    },
    {
        location: [["Ireland"], [53.280192832733576, -7.688103518964818]],
        members: 6,
        contact: ["https://discord.gg/4BUau4AZre","DiscordInviteLink"]
    },
    {
        location: [["Latvia","Riga"], [56.94748425529816, 24.003027136431925]],
        members: 2,
        contact: ["https://discord.gg/Qk8KUk787z","DiscordInviteLink"]
    },
    {
        location: [["USA","Florida"], [26.945024427155868, -81.22162645059898]],
        members: 2,
        contact: ["https://discord.gg/Qk8KUk787z","DiscordInviteLink"]
    },
    {
        location: [["USA","Colorado","Louisville"], [39.965026323855334, -105.15948886693151]],
        members: 1,
        contact: ["https://discord.gg/Qk8KUk787z","DiscordInviteLink"]
    },
    {
        location: [["USA","Georgia"], [33.91813982808364, -84.38058579763135]],
        members: 1,
        contact: ["https://discord.gg/Qk8KUk787z","DiscordInviteLink"]
    },
    {
        location: [["USA","Ohio"], [40.18243610076637, -83.07800532738788]],
        members: 1,
        contact: ["https://discord.gg/Qk8KUk787z","DiscordInviteLink"]
    }
]

export let groupsByCountry = {}
for (let g of groups) {
    let country = g.location[0][0]
    if (country in groupsByCountry) {
        groupsByCountry[country].push(g)
    }
    else {
        groupsByCountry[country] = [g]
    }
}

export let groupsMarkersLayer = L.layerGroup()
let groupsMarkersLayerOut = L.layerGroup()
let groupsMarkersLayerIn = L.layerGroup()

let contactGeneral =["https://discord.gg/4BUau4AZre","DiscordInviteLink"]

function addMarkersToLayer(g,layer,content,locale) {
    let coordinates
    let text = "<b>"+content["Group"]+"</b><br>"
    for (let field in g) {
        let fieldText = content[field] + ": "
        if (field=="contact") {
            text += fieldText + "<a href='" + g.contact[0] + "' target='_blank' rel=noreferrer>" + content[g.contact[1]] + "</a>"
        }
        else if (field=="location") {
            let location = g[field][0]
            let locationString
            if (locale=="en") {
                locationString = location.map(x => x).join(", ")
            }
            else {
                locationString = location.map(x => content[x]).join(", ")
            }
            text += fieldText + locationString + "<br>"
            coordinates = g[field][1]
        }
        else {
            text += fieldText + g[field] + "<br>"
        }
    }
    var markerIcon = new L.Icon({
        iconUrl: 'https://www.libsoc.org/img/common/markers/marker-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })
    let marker = L.marker(coordinates, {icon: markerIcon})
    marker.addTo(layer).bindPopup(text)
}

export function addMarkersGroups(map,content,locale) {
    for (let g of groups) {
        addMarkersToLayer(g,groupsMarkersLayerIn,content,locale)
    }
    for (let gs of Object.values(groupsByCountry)) {
        if (gs.length==1) {
            let g = {...gs[0]}
            g.location[0] = [g.location[0][0]]
            addMarkersToLayer(g,groupsMarkersLayerOut,content,locale)
        }
        else {
            let locationName = [gs[0].location[0][0]]
            let locationCoordinates = [0,0]
            let members = 0
            let contact = gs[0].contact
            for (let g of gs) {
                locationCoordinates[0] += g.location[1][0]
                locationCoordinates[1] += g.location[1][1]
                members += g.members
                if (g.contact[0]!=gs[0].contact[0]) {
                    contact = contactGeneral
                }
            }
            locationCoordinates[0] = locationCoordinates[0]/gs.length
            locationCoordinates[1] = locationCoordinates[1]/gs.length
            let gNew = {
                location: [locationName,locationCoordinates],
                members: members,
                contact: contact
            }
            addMarkersToLayer(gNew,groupsMarkersLayerOut,content,locale)
        }
    }
    groupsMarkersLayerOut.addTo(groupsMarkersLayer)
    groupsMarkersLayer.addTo(map)
    map.on("zoomend", () => onZoomEnd(map))
}

function onZoomEnd(map) {
    let zoomLevel = map.getZoom()
    if (zoomLevel==3) {
        groupsMarkersLayer.removeLayer(groupsMarkersLayerIn)
        groupsMarkersLayerOut.addTo(groupsMarkersLayer)
    }
    else if (zoomLevel==4) {
        groupsMarkersLayer.removeLayer(groupsMarkersLayerOut)
        groupsMarkersLayerIn.addTo(groupsMarkersLayer)
    }
}

  
