<svelte:options tag="groups-add-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { loadLocaleContent, getData, sendData } from "/js/libraries/serverTools.js"
    import { addMarkersEntries, translate } from "/js/libraries/mapTools.js"
    
    // Import components
    import "/js/components/map-component.js" 
    
    // Main code
    let loaded = writable(0)
    let content = writable({})
    let entries
    let entriesByCountry

    let callback = (response) => {
        entries = JSON.parse(response)
        entriesByCountry = {}
        for (let g of entries) {
            let country = g.country
            if (g.contact==null) {
                g.contact = "https://discord.gg/Qk8KUk787z"
            }
            if (country in entriesByCountry) {
                entriesByCountry[country].push(g)
            }
            else {
                entriesByCountry[country] = [g]
            }
        }
        loaded.update((val) => {
            return val + 1
        })
    }
    getData("/assets/groups.json",callback)


    let confirmationMsg
    let addressInput
    let contactInput
    let addressVec
    let userPinLat = 0
    let userPinLng = 0
    let userPin = createPin(0,0)
    userPin.setOpacity(0)

    let locale = loadLocaleContent(content,"groups-component",loaded)
    loadLocaleContent(content,"countries",loaded)

    function createPin(lat,lng) {
        let markerIcon = new L.Icon({
            iconUrl: '/img/common/markers/marker-black.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
        return L.marker([lat,lng], {icon: markerIcon})
    }

    function updatePin(marker,lat,lng) {
        let newLatLng = L.latLng(lat, lng); // Replace with the desired coordinates
        marker.setLatLng(newLatLng)
    }

    function reverseGeocodeLocal(latitude, longitude) {
        let url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=jsonv2`;
        
        let callback = (response) => {
            // Parse the response JSON
            response = JSON.parse(response)
            // Extract the address information from the response
            let address = response.address
            let city = address.city || address.town || address.village || address.hamlet
            let state = address.state
            let country = address.country
            let fullAddress = country
            if (state!=undefined) {
                fullAddress += ", " + state
            }
            else {
                state = ""
            }
            if (city!=undefined) {
                fullAddress += ", " + city
            }
            else {
                city = ""
            }
            addressInput.value = fullAddress
            resizeInput(addressInput)
        }
        getData(url,callback)
    }

    function reverseGeocode(latitude, longitude) {
        let url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=jsonv2&accept-language=en`;
        
        let callback = (response) => {
            // Parse the response JSON
            response = JSON.parse(response)
            // Extract the address information from the response
            let address = response.address
            let city = address.city || address.town || address.village || address.hamlet
            let state = address.state
            let country = address.country
            let fullAddress = country
            if (state!=undefined) {
                fullAddress += ", " + state
            }
            else {
                state = ""
            }
            if (city!=undefined) {
                fullAddress += ", " + city
            }
            else {
                city = ""
            }
            addressVec = [country,state,city]
        }
        getData(url,callback)
    }

    function addGroupPinContent(g,content,locale) {
        let coordinates
        let text = "<b>"+content["Group"]+"</b><br>"
        for (let field of ["location","members","contact"]) {
            let fieldText = content[field] + ": "
            if (field=="contact") {
                text += fieldText + "<a href='" + g.contact + "' target='_blank' rel=noreferrer>" + g.contact + "</a>"
            }
            else if (field=="location") {
                let location = [g.country,g.state,g.town].filter(x => x!=null && x!=undefined)
                let locationString
                if (locale=="en") {
                    locationString = location.map(x => x).join(", ")
                }
                else {
                    locationString = location.map(x => translate(content, x)).join(", ")
                }
                text += fieldText + locationString + "<br>"
                coordinates = [g.latitude,g.longitude]
            }
            else {
                text += fieldText + g[field] + "<br>"
            }
        }
        return {text,coordinates}
    }


    function mapCallback(createMap,content,locale) {
        let map = createMap([22, 0],2)
        addMarkersEntries(entries,entriesByCountry,map,content,locale,addGroupPinContent,"green")

        userPin.addTo(map)
        map.on('click', function(event) {
            let lat = event.latlng.lat;
            let lng = event.latlng.lng;
            userPinLat = lat
            userPinLng = lng
            updatePin(userPin,lat,lng)
            userPin.setOpacity(1)
            reverseGeocodeLocal(lat, lng)
            reverseGeocode(lat, lng)
        })
    }

    function updateConfirmationMsg(response) {
        if (response!==false) {

            confirmationMsg.innerHTML = "You have been added to our database! Now go to our Discord to verify yourself."
            confirmationMsg.style.color = "green"
        }
        else {
            confirmationMsg.innerHTML = "Something went wrong."
            confirmationMsg.style.color = "red"
        }
        
    }

    function submitLocation() {
        if (addressVec!=undefined) {
            let data = {
                country: addressVec[0],
                state: addressVec[1],
                town: addressVec[2],
                latitude: userPinLat,
                longitude: userPinLng,
                contact: contactInput.value
            }
            
            if (data.state=="") {
                data.state = null
            }
            if (data.town=="") {
                data.town = null
            }
            if (data.contact=="") {
                data.contact = null
            }
            let url = "/" + locale + "/groups-add-post/"
            sendData(url,data,updateConfirmationMsg)
        }
    }

    function resizeInput(el) {
        el.nextElementSibling.innerHTML = el.value
    }
    
    onMount(() => { 

    })
</script>

{#key $loaded}
    {#if $loaded==3}
        <div id="container">
            <!--<img src="img/crowd.png" id="crowd" alt="crowd">-->
            <div id="text-container">
                <h1>Add a Group</h1>
                <img id="groups-img" src="/img/common/groups.svg" alt="groups">
                <p class="description">If there are no groups in your town with whom you can organize then do the following:</p>
                <ol>
                    <li>Click on the map to show us where you are located;</li>
                    <li>Add a way to contact you or leave blank for a pin to point to our discord;</li>
                    <li>Press "Submit" to add yourself to our map;</li>
                    <li>Verify yourself by having a chat with us at our Discord server to show on the map;</li>
                </ol>
                <div id="address-input-wrapper" class="input-label-wrapper">
                    <label for="address-input">Location: </label>
                    <div class="input-wrapper">
                        <input bind:this={addressInput} on:input={() => resizeInput(addressInput)} id="address-input" type="text" readonly>
                        <div class="ghost-input"></div>
                    </div>
                </div>
                <div class="input-label-wrapper">
                    <label for="contact-input">Contact: </label>
                    <div class="input-wrapper">
                        <input bind:this={contactInput} on:input={() => resizeInput(contactInput)} id="contact-input" type="text">
                        <div class="ghost-input"></div>
                    </div>
                </div>
                <button id="submit-button" on:click={submitLocation}>Submit</button>
                <p id="confirmation-msg" bind:this={confirmationMsg}></p>
                <map-component id="map" callback={(createMap) => mapCallback(createMap,$content,locale)}></map-component>
            </div>
        </div>
    {/if}
{/key}

<style>
    @import '/css/common.css';

    #confirmation-msg {
        margin-top: 0.5rem;
        margin-bottom: 2rem;
    }

    ol li {
        margin-left: 3rem;
        margin-bottom: 0.5rem;
    }

    label {
        display: inline-block;
        font-family: var(--serif,serif);
        font-size: 1.15rem;
        line-height: 160%;
        color: #222222;
        width: 5.5rem;
    }

    input, .ghost-input {
        font-size: 1.15rem;
        font-family: var(--serif,serif);
    }

    input {
        height: 2.5rem;
        display: inline-block;
        position: relative;
    }

    #address-input, #contact-input {
        width: 100%;
    }

    #address-input-wrapper {
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    .ghost-input {
        display: block;
        visibility: hidden;
        height: 0;
        
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .input-wrapper {
        display: inline-block;
        max-width: calc(100% - 5.5rem);
        min-width: min(20rem, calc(100% - 5.5rem));
        height: 2.5rem;
    }

    .input-label-wrapper {
        display: flex;
        justify-content: start;
    }

    .input-label-wrapper label {
        position: relative;
        top: 0.3rem;
    }

    .description {
        margin-bottom: 1rem;
    }

    #submit-button {
        display: block;
        margin: auto;
        margin-top: 2rem;
        padding: 1rem 2rem;
        font-size: 1.4rem;
        font-family: var(--sans-serif,sans-serif);
        border: 0rem solid black;
        border-radius: 0.5rem;
        background: #cb1816;
        color: white;
    }

    #add-prompt {
        margin-bottom: 2rem;
    }

    #groups-img {
        position: absolute;
        width: 14rem;
        left: 50%;
        transform: translate(-50%);
        z-index: 0;
        opacity: 0.2;
    }

    #text-container>:nth-child(3) {
        margin-top: 8rem;
    }

    .country-name {
        margin-bottom: 0.5rem;
    }

    .country-block {
        margin-bottom: 2rem;
    }

    .location-info {
        margin-bottom: 0.75rem;
    }

    .location-info p {
        margin-bottom: 0;
    }

    a {
        color: #DD1C1A;
    }

    #map {
        --height: 30rem;
        --width: 100%;
        --margin-top: 2rem;
        --margin-bottom: 0.5rem;
    }

    #text-container {
        position: relative;
        max-width: calc(100vw - 4rem);
        margin: auto;
    }

    h1 {
        margin-bottom: 1rem;
        font-size: 2.2rem;
        text-align: center;
    }

    h3 {
        margin-bottom: 1rem;
    }

    #container {
        margin: auto;
        max-width: 800px;
        margin-top: 1rem;
        margin-bottom: 4rem;
    }

    #container p {
        text-align: justify;
    }

</style>