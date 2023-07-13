export let groups = [
    {
        location: [["Canada","Halifax"],[44.65166135030067, -63.59289968306866]],
        members: 2,
        contact: ["https://discord.gg/xAPZmyr8B6","DiscordInviteLink"]
    },
    {
        location: [["Denmark","Copenhagen"],[55.6840661150132, 12.557133959514688]],
        members: 1,
        contact: ["https://discord.gg/xAPZmyr8B6","DiscordInviteLink"]
    },
    {
        location: [["Denmark","Kolding"], [55.49261908652738, 9.470268969851743]],
        members: 1,
        contact: ["https://discord.gg/xAPZmyr8B6","DiscordInviteLink"]
    },
    {
        location: [["Estonia","KohtlaJarve"], [59.40629447076191, 27.280605339416322]],
        members: 3,
        contact: ["https://discord.gg/xAPZmyr8B6","DiscordInviteLink"]
    },
    {
        location: [["Greece","Athens"], [37.94877252621736, 23.677622972996158]],
        members: 1,
        contact: ["https://discord.gg/xAPZmyr8B6","DiscordInviteLink"]
    },
    {
        location: [["Ireland",""], [53.280192832733576, -7.688103518964818]],
        members: 6,
        contact: ["https://discord.gg/4BUau4AZre","DiscordInviteLink"]
    },
    {
        location: [["Latvia","Riga"], [56.94748425529816, 24.003027136431925]],
        members: 2,
        contact: ["https://discord.gg/xAPZmyr8B6","DiscordInviteLink"]
    },
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

let groupsLoaded = false
let groupsMarkersLayerOut = L.layerGroup()
let groupsMarkersLayerIn = L.layerGroup()

let contactGeneral =["https://discord.gg/4BUau4AZre","DiscordInviteLink"]

function addMarkerGroups(g,layer,content) {
    let coordinates
    let text = ""
    for (let field in g) {
        let fieldText = content[field] + ": "
        if (field=="contact") {
            text += fieldText + "<a href='" + g.contact[0] + "' target='_blank' rel=noreferrer>" + content[g.contact[1]] + "</a>"
        }
        else if (field=="location") {
            let location = g[field][0]
            let town = location[1]=="" ? "" : ", " + content[location[1]]
            text += fieldText + content[location[0]] + town + "<br>"
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

export function addMarkersGroups(map,content) {
    for (let g of groups) {
        addMarkerGroups(g,groupsMarkersLayerIn,content)
    }
    for (let gs of Object.values(groupsByCountry)) {
        if (gs.length==1) {
            let g = {...gs[0]}
            g.location[0][1] = ""
            addMarkerGroups(g,groupsMarkersLayerOut,content)
        }
        else {
            let locationName = [gs[0].location[0][0],""]
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
            
            addMarkerGroups(gNew,groupsMarkersLayerOut,content)
        }
    }
    groupsMarkersLayerOut.addTo(map)
    map.on("zoomend", () => onZoomEnd(map))
}

function onZoomEnd(map) {
    let zoomLevel = map.getZoom()
    if (zoomLevel==3) {
        map.removeLayer(groupsMarkersLayerIn)
        groupsMarkersLayerOut.addTo(map)
    }
    else if (zoomLevel==4) {
        map.removeLayer(groupsMarkersLayerOut)
        groupsMarkersLayerIn.addTo(map)
    }
}