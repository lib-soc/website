<svelte:options tag="groups-add-component" />

<script>
    // Import statements
    import { onMount, getContext } from 'svelte'
    import { writable } from 'svelte/store';
    import { loadLocaleContent, getData, sendData } from "/js/libraries/serverTools.js"
    import { addMarkersEntries, translate } from "/js/libraries/mapTools.js"
    
    // Import components
    import "/js/components/map-component.js" 

    // Export statements
    export let map = null
    
    // Main code
    let loaded = writable(0)
    let content = writable({})
    let entries
    let entriesByCountry
    let userData

    let buttonsGroupMember
    let buttonsNotGroupMember

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
    let membersInput
    let addressVec = ["","",""]
    let userPinData = {

    }
    let userPinLng = 0
    let userPin = createPin(0,0)
    userPin.setOpacity(0)
    let modeButtons = []

    let context = getContext("profile-component")
    let closeGroupsAdd = context.closeGroupsAdd
    let maps = context.maps
    let onLoadedGroups = context.onLoadedGroups
    let userGroups = context.userGroups
    let user = context.user

    let has_group = userGroups.length!=0
    let mode = has_group ? 2 : 0
    let pendingGroup
    if  (has_group) {
        pendingGroup= userGroups[0].status!=undefined
        if (pendingGroup) {
            mode = 3
        }
    }

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
            if (address!=undefined) {
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
        map = createMap([22, 0],2)
        maps["groupsAdd"] = map
        let options = {
            enableCountryGrouping: false,
            pinCallback: pinCallback
        }
        addMarkersEntries(entries,entriesByCountry,map,content,locale,addGroupPinContent,"green",options)

        userPin.addTo(map)
        map.on('click', function(event) {
            if (mode==0) {
                let lat = event.latlng.lat;
                let lng = event.latlng.lng;
                userPinData["latitude"] = lat
                userPinData["longitude"] = lng
                userPinData["id"] = null
                updatePin(userPin,lat,lng)
                userPin.setOpacity(1)
                reverseGeocodeLocal(lat, lng)
                reverseGeocode(lat, lng)
            }
        })
    }

    function updateConfirmationMsg(response) {
        if (response!==false) {
            if (mode==0 && !user.verified) {
                confirmationMsg.innerHTML = "You have been added to our database! Now go to our Discord to verify yourself."
            }
            else {
                confirmationMsg.innerHTML = "Success!"
            }
            confirmationMsg.style.color = "green"
            if (mode==0 || mode==1) {
                userGroups[0] = {}
            }
            userGroups[0].country = addressVec[0]=="" ? null :  addressVec[0]
            userGroups[0].state = addressVec[1]=="" ? null :  addressVec[1]
            userGroups[0].town = addressVec[2]=="" ? null :  addressVec[2]
            userGroups[0].members = userPinData["members"]
            onLoadedGroups()
        }
        else {
            confirmationMsg.innerHTML = "Something went wrong."
            confirmationMsg.style.color = "red"
        }
    }

    function submitLocation() {
        if (addressVec[0]!="" || mode==3) {
            let membersVal, contactVal
            if (mode==0) { // Create
                membersVal = membersInput.value
                contactVal = contactInput.value
            }
            else if (mode==1) { // Join
                contactVal = contactInput.value
            }
            else if (mode==2 || mode==3) { // Move
                membersVal = ""
                contactVal = ""
            }
            else if (mode==3) { // Leave
                membersVal = ""
                contactVal = ""
                addressVec = [null,null,null]
                userPinData["latitude"] = null
                userPinData["longitude"] = null
            }
            
            userData = {
                country: addressVec[0],
                state: addressVec[1],
                town: addressVec[2],
                latitude: userPinData["latitude"],
                longitude: userPinData["longitude"],
                contact: contactVal=="" ? null : contactVal,
                members: membersVal=="" ? null : parseInt(membersVal),
                group_id: userPinData["id"],
                mode: mode
            }
            
            if (userData.state=="") {
                userData.state = null
            }
            if (userData.town=="") {
                userData.town = null
            }
            let url = "/" + locale + "/groups-add-post/"
            sendData(url,userData,updateConfirmationMsg)
        }
    }

    function resizeInput(el) {
        el.nextElementSibling.innerHTML = el.value
    }

    function pinCallback(marker,event) {
        if (mode==1) {
            let lat = event.latlng.lat;
            let lng = event.latlng.lng;
            userPinData["latitude"] = lat
            userPinData["longitude"] = lng
            userPinData["id"] = marker.id
            userPinData["members"] = marker.members
            updatePin(userPin,lat,lng)
            userPin.setOpacity(1)
            reverseGeocodeLocal(lat, lng)
            reverseGeocode(lat, lng)
        }
    }

    function chooseButton(index) {
        for (let b of modeButtons) {
            if (b!=undefined) {
                b.style.background = "rgba(197, 43, 40, 0.319)"
                b.style.color = "black"
            }
        }
        modeButtons[index].style.background = "rgb(197, 43, 40)"
        modeButtons[index].style.color = "white"
        mode = index
    }

    function getAddress(g) {
        if (g!=undefined) {
            let location = [g.country,g.state,g.town].filter(x => x!=null)
            return location.map(x => locale=="en" ? x : translate($content,x)).join(", ")
        }
        else {
            return "Create or join group"
        }
    }

    function onLoaded() {
        if ($loaded==3) {
            chooseButton(mode)
            if (mode==2 || mode==3) {
                addressInput.value = getAddress(userGroups[0])
            }
        }
        else {
            let f = () => onLoaded()
            setTimeout(f, 100)
        }
    }
    
    onMount(() => { 
        onLoaded()
    })
</script>

{#key $loaded}
    {#if $loaded==3}
        <div id="container">
            <button class="close-button" on:click={closeGroupsAdd}></button>
            <!--<img src="img/crowd.png" id="crowd" alt="crowd">-->
            <div id="text-container">
                {#if !has_group}
                <div bind:this={buttonsNotGroupMember} id="button-line">
                    <button bind:this={modeButtons[0]} on:click={() => chooseButton(0)}>Create</button>
                    <button bind:this={modeButtons[1]} on:click={() => chooseButton(1)}>Join</button>
                </div>
                {:else if has_group && !pendingGroup}
                <div bind:this={buttonsGroupMember} id="button-line">
                    <button bind:this={modeButtons[2]} on:click={() => chooseButton(2)} style={"display: " + (pendingGroup ? "none" : "initial")}>Move</button>
                    <button bind:this={modeButtons[3]} on:click={() => chooseButton(3)}>Leave</button>
                </div>
                {:else}
                <div bind:this={buttonsGroupMember} id="button-line">
                    <button bind:this={modeButtons[3]} on:click={() => chooseButton(3)}>Leave</button>
                </div>
                {/if}
                <div id="address-input-wrapper" class="input-label-wrapper">
                    <label for="address-input">Location: </label>
                    <div class="input-wrapper">
                        <input bind:this={addressInput} on:input={() => resizeInput(addressInput)} id="address-input" type="text" readonly>
                        <div class="ghost-input"></div>
                    </div>
                </div>
                {#key mode}
                    {#if mode==0}
                        <div id="members-input-wrapper" class="input-label-wrapper">
                            <label for="members-input">Members: </label>
                            <div class="input-wrapper">
                                <input bind:this={membersInput} id="members-input" type="text" value={1}>
                            </div>
                        </div>
                    {/if}
                    {#if mode==0 || mode==1}
                        <div class="input-label-wrapper">
                            <label for="contact-input">Contact: </label>
                            <div class="input-wrapper">
                                <input bind:this={contactInput} on:input={() => resizeInput(contactInput)} id="contact-input" type="text">
                                <div class="ghost-input"></div>
                            </div>
                        </div>
                    {/if}
                {/key}
                <button id="submit-button" on:click={submitLocation}>Submit</button>
                <p id="confirmation-msg" bind:this={confirmationMsg}></p>
                {#if !(has_group && pendingGroup)}
                    <map-component id="map" callback={(createMap) => mapCallback(createMap,$content,locale)}></map-component>
                {/if}
            </div>
        </div>
    {/if}
{/key}

<style>
    @import '/css/common.css';

    #button-line {
        position: relative;
        width: fit-content;
        margin: auto;
        margin-top: 1.5rem;
    }

    #button-line button{
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.15rem;
        padding: 1rem 0;
        width: 7rem;
    }

    #button-line :first-child {
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        margin-right: 0.1rem;
    }

    #button-line :last-child {
        margin-left: 0.1rem;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    .close-button {
        position: absolute;
        top: 2rem;
        right: 0rem;
        width: 2rem;
        height: 2rem;
        border: none;
        cursor: pointer;
        z-index: 2;
    }

    .close-button:hover {
        opacity: 0.7;
    }

    .close-button::before,
    .close-button::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0.2rem;
        height: 2rem;
        background-color: #000;
        border-radius: 1rem;
        }

    .close-button::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    .close-button::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
    

    #confirmation-msg {
        margin-top: 0.5rem;
        margin-bottom: 2rem;
    }

    ol li {
        margin-left: 1rem;
        margin-bottom: 0.5rem;
    }

    label {
        display: inline-block;
        font-family: var(--serif,serif);
        font-size: 1.15rem;
        line-height: 160%;
        color: #222222;
        width: 6rem;
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

    #members-input-wrapper {
        margin-bottom: 1rem;
    }

    #members-input {
        width: 5rem;
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