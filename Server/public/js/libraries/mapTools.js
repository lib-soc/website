let contactGeneral = "https://discord.gg/Qk8KUk787z"

export function translate(content, x) {
    let out = content[x]
    if (out==undefined) {
        return x
    }
    else {
        return out
    }
}

function addMarkersToLayer(g,layer,content,locale,addPinContent,markerColor,options) {
    let {text,coordinates} = addPinContent(g,content,locale)
    var markerIcon = new L.Icon({
        iconUrl: 'https://www.libsoc.org/img/common/markers/marker-' + markerColor + '.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })
    let marker = L.marker(coordinates, {icon: markerIcon})
    marker.id = g.id
    marker.members = g.members
    marker.contact = g.contact
    marker.addTo(layer).bindPopup(text)
    
    if (options.pinCallback!=undefined) {
        marker.on('click', (event) => options.pinCallback(marker,event))
    }
}

export function addMarkersEntries(entries,entriesByCountry,map,content,locale,addPinContent,markerColor,options) {
    let entriesMarkersLayer = L.layerGroup()
    let entriesMarkersLayerOut = L.layerGroup()
    let entriesMarkersLayerIn = L.layerGroup()
    for (let g of entries) {
        if (g.country!="Online" && g.country!="Worldwide") {
            addMarkersToLayer(g,entriesMarkersLayerIn,content,locale,addPinContent,markerColor,options)
        }
    }
    if (options.enableCountryGrouping) {
        for (let gs of Object.values(entriesByCountry)) {
            if (gs.length==1) {
                let g = {...gs[0]}
                g.country = [g.country]
                if (g.country!="Online" && g.country!="Worldwide") {
                    addMarkersToLayer(g,entriesMarkersLayerOut,content,locale,addPinContent,markerColor,options)
                }
            }
            else {
                if (gs[0].country!="Online" && gs[0].country!="Worldwide") {
                    let locationName = gs[0].country
                    let locationCoordinates = [0,0]
                    let members = 0
                    let contact = gs[0].contact
                    for (let g of gs) {
                        locationCoordinates[0] += g.latitude
                        locationCoordinates[1] += g.longitude
                        members += g.members
                        if (g.contact[0]!=gs[0].contact[0]) {
                            contact = contactGeneral
                        }
                    }
                    locationCoordinates[0] = locationCoordinates[0]/gs.length
                    locationCoordinates[1] = locationCoordinates[1]/gs.length
                    let gNew = {
                        country: locationName,
                        latitude: locationCoordinates[0],
                        longitude: locationCoordinates[1],
                        members: members,
                        contact: contact
                    }
                    addMarkersToLayer(gNew,entriesMarkersLayerOut,content,locale,addPinContent,markerColor,options)
                }
            }
        }
        entriesMarkersLayerOut.addTo(entriesMarkersLayer)
        map.on("zoomend", () => onZoomEnd(map,entriesMarkersLayer,entriesMarkersLayerOut,entriesMarkersLayerIn))
    }
    else {
        entriesMarkersLayerIn.addTo(entriesMarkersLayer)
    }
    entriesMarkersLayer.addTo(map)
    
    return entriesMarkersLayer
}

function onZoomEnd(map,entriesMarkersLayer,entriesMarkersLayerOut,entriesMarkersLayerIn) {
    let zoomLevel = map.getZoom()
    if (zoomLevel==3) {
        entriesMarkersLayer.removeLayer(entriesMarkersLayerIn)
        entriesMarkersLayerOut.addTo(entriesMarkersLayer)
    }
    else if (zoomLevel==4) {
        entriesMarkersLayer.removeLayer(entriesMarkersLayerOut)
        entriesMarkersLayerIn.addTo(entriesMarkersLayer)
    }
}

  
