<svelte:options tag="groups-add-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { groupsByCountry, addMarkersGroups } from '/js/groups.js'
    import { loadLocaleContent, getData, sendData } from "/js/libraries/serverTools.js"
    
    // Import components
    import "/js/components/map-component.js" 
    
    // Main code
    let loaded = writable(0)
    let content = writable({})

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

    function reverseGeocode(latitude, longitude) {
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
            addressVec = [country,state,city]
        }
        getData(url,callback)
    }

    function mapCallbackGroups(createMap,content) {
        let map = createMap([22, 0],2)
        addMarkersGroups(map,content)

        userPin.addTo(map)
        map.on('click', function(event) {
            let lat = event.latlng.lat;
            let lng = event.latlng.lng;
            userPinLat = lat
            userPinLng = lng
            updatePin(userPin,lat,lng)
            userPin.setOpacity(1)
            reverseGeocode(lat, lng)
        })
    }

    function submitLocation() {
        if (addressVec!=undefined) {
            let data = [...addressVec,userPinLat,userPinLng,contactInput.value]
            let url = "/" + locale + "/groups-add-post/"
            sendData(url,data)

        }
        
    }
    
    onMount(() => { 

    })
</script>

{#key $loaded}
    {#if $loaded==2}
        <div id="container">
            <!--<img src="img/crowd.png" id="crowd" alt="crowd">-->
            <div id="text-container">
                <h1>Add a Group</h1>
                <img id="groups-img" src="/img/common/groups.svg" alt="groups">
                <p class="description">If there are no groups in your town with whom you can organize then</p>
                <ol>
                    <li>click on the map to show us where you are located,</li>
                    <li>add a way to contact you or leave blank for a pin to point to our discord and</li>
                    <li>press "Submit" to add yourself to our map</li>
                </ol>
                <label for="address-input">Location: </label><input bind:this={addressInput} id="address-input" type="text" readonly><br>
                <label for="contact-input">Contact: </label><input bind:this={contactInput} id="contact-input" type="text">
                <button id="submit-button" on:click={submitLocation}>Submit</button>
                <map-component id="map" callback={(createMap) => mapCallbackGroups(createMap,$content)}></map-component>
            </div>
        </div>
    {/if}
{/key}

<style>
    @import '/css/common.css';

    ol li {
        margin-left: 3rem;
    }

    label {
        display: inline-block;
        font-family: var(--serif,serif);
        font-size: 1.15rem;
        line-height: 160%;
        color: #222222;
        width: 5.5rem;
    }

    input {
        font-size: 1.15rem;
        font-family: var(--serif,serif);
        height: 2.5rem;
    }

    #address-input {
        margin-top: 2rem;
        margin-bottom: 1rem;
        width: min(30rem,calc(100% - 10rem));
    }

    #contact-input {
        width: min(20rem,calc(100% - 10rem));
    }

    .description {
        margin-bottom: 1rem;
    }

    #submit-button {
        display: block;
        margin-top: 2rem;
        margin-bottom: 2rem;
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