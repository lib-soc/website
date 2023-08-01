<svelte:options tag="join-us-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { loadLocaleContent, getData } from "/js/libraries/serverTools.js"
    import { addMarkersEntries, translate } from "/js/libraries/mapTools.js"
    import { addGroupPinContent, addCommunePinContent, addCoopPinContent, addPartyPinContent } from "/js/mapFuncs.js"

    // Import components
    import "/js/components/map-component.js" 

    // Main code
    let loaded = writable(0)
    let content = writable({})
    let entries = {}
    let entriesByCountry ={}

    loadLocaleContent(content,"groups-component",loaded)
    loadLocaleContent(content,"communes-component",loaded)
    loadLocaleContent(content,"cooperatives-component",loaded)
    loadLocaleContent(content,"parties-component",loaded)
    loadLocaleContent(content,"countries",loaded)
    let locale = loadLocaleContent(content,"join-us-component",loaded)

    
    let callback = (response,name) => {
        entries[name] = JSON.parse(response)
        entriesByCountry[name] = {}
        for (let g of entries[name]) {
            let country = g.country
            if (g.contact==null) {
                g.contact = "https://discord.gg/Qk8KUk787z"
            }
            if (country in entriesByCountry[name]) {
                entriesByCountry[name][country].push(g)
            }
            else {
                entriesByCountry[name][country] = [g]
            }
        }
        loaded.update((val) => {
            return val + 1
        })
    }
    getData("/assets/groups.json",(response) => callback(response,"groups"))
    getData("/assets/communes.json",(response) => callback(response,"communes"))
    getData("/assets/cooperatives.json",(response) => callback(response,"cooperatives"))
    getData("/assets/parties.json",(response) => callback(response,"parties"))

    function mapCallback(createMap,content,locale) {
        let map = createMap([22, 0],2)
        let options = {
            enableCountryGrouping: true,
        }
        let groupsMarkersLayer = addMarkersEntries(entries["groups"],entriesByCountry["groups"],map,content,locale,addGroupPinContent,"green",options)
        let communesMarkersLayer = addMarkersEntries(entries["communes"],entriesByCountry["communes"],map,content,locale,addCommunePinContent,"red",options)
        let coopsMarkersLayer = addMarkersEntries(entries["cooperatives"],entriesByCountry["cooperatives"],map,content,locale,addCoopPinContent,"blue",options)
        let partiesMarkersLayer = addMarkersEntries(entries["parties"],entriesByCountry["parties"],map,content,locale,addPartyPinContent,"gold",options)

        let overlayMaps = {}
        overlayMaps[content.groups] = groupsMarkersLayer
        overlayMaps[content.communes] = communesMarkersLayer
        overlayMaps[content.cooperatives] = coopsMarkersLayer
        overlayMaps[content.parties] = partiesMarkersLayer
        L.control.layers(null, overlayMaps).addTo(map)
    }

    onMount(() => { 

    })
</script>

{#key $loaded}
    {#if $loaded==10}
        <div id="container">
            <div id="text-container">
                <h1>{$content.heading}</h1>
                <img src="/img/common/join-group.svg" id="join-group" alt="join group">
                <ol id="condition-list">
                    <li>{$content.condition1}</li>
                    <li>{$content.condition2}</li>
                    <li>{$content.condition3}</li>
                    <p>{@html $content.conditionsOutcome}</p>
                </ol>
                <h2>{$content.subheading1}</h2>
                <ol id="value-proposition-list">
                    <li>{$content.valueProposition1}</li>
                    <li>{$content.valueProposition2}</li>
                    <li>{$content.valueProposition3}</li>
                    <li>{$content.valueProposition4}</li>
                    <p>{$content.valueProposition5}</p>
                </ol>
                <h2>{$content.subheading2}</h2>
                <div id="call-to-action-list">
                    <p>{$content.findOur}</p>
                    <ol id="entities-list">
                        <li><a href={"/" + locale + "/groups"}>{$content.group}</a>,</li> 
                        <li><a href={"/" + locale + "/communes"}>{$content.commune}</a></li> 
                        <li><a href={"/" + locale + "/cooperatives"}>{$content.cooperative}</a> {$content.or}</li>
                        <li><a href={"/" + locale + "/parties"}>{$content.party}</a></li> 
                    </ol>
                    <p>{$content.nearYou}</p>
                </div>
                <p>{$content.noneNear} <a href="https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh" target="_blank" rel=noreferrer>{$content.WhatsAppGroup}</a> {$content.or} <a href="https://discord.gg/Qk8KUk787z" target="_blank" rel=noreferrer>{$content.DiscordServer}</a>{$content.helpStart}</p>
                <map-component id="map" callback={(createMap) => mapCallback(createMap,$content,locale)} colors={["#23AC20","#CA2437","#217BC9","#FFD326"]}></map-component>
            </div>
        </div>
    {/if}
{/key}


<style>
    @import '/css/common.css';

    #entities-list li {
        list-style: none;
    }

    #entities-list li:before {
        content: '';
        display: inline-block;
        height: 1.1rem;
        width: 1rem;
        background-size: contain;
        background-repeat: no-repeat;
        margin-left: -1.5rem;
        margin-right: 0.5rem;
    }

    #entities-list li:nth-of-type(1):before {
        background-image: url(https://www.libsoc.org/img/common/markers/marker-green.png);
    }
    #entities-list li:nth-of-type(2):before {
        background-image: url(https://www.libsoc.org/img/common/markers/marker-red.png);
    }
    #entities-list li:nth-of-type(3):before {
        background-image: url(https://www.libsoc.org/img/common/markers/marker-blue.png);
    }
    #entities-list li:nth-of-type(4):before {
        background-image: url(https://www.libsoc.org/img/common/markers/marker-gold.png);
    }

    #entities-list li::marker {
        display: inline-block;
        height: 1rem;
    }

    h2 {
        margin-bottom: 1rem;
    }

    #value-proposition-list {
        margin-bottom: 2rem;
    }

    #value-proposition-list > li {
        margin-bottom: 1rem;
    }

    ol li {
        position: relative;
        font-family: var(--serif,serif);
        margin-left: 1.5rem;
        list-style-position: outside;
    }

    #join-group {
        position: absolute;
        width: 10.5rem;
        height: auto;
        left: calc(50% + 1.2rem);
        transform: translate(-50%);
        z-index: 0;
        opacity: 0.2;
    }

    #map {
        --height: 30rem;
        --width: 100%;
        --margin-bottom: 3rem;
    }

    #call-to-action-list > ol>li {
        position: relative;
        font-family: var(--serif,serif);
        margin-left: 3rem;
    }

    #condition-list {
        margin-bottom: 2rem;
        margin-top: 7rem;
    }

    #condition-list>li {
        margin-bottom: 1rem;
    }

    #text-container {
        max-width: calc(100vw - 4rem);
        margin: auto;
    }

    h1 {
        margin-bottom: 1rem;
        font-size: 2.2rem;
        text-align: center;
    }

    #container {
        margin: auto;
        max-width: 800px;
        margin-top: 1rem;
        margin-bottom: 4rem;
    }

    #container>div>p {
        margin-bottom: 1rem;
    }

    #call-to-action-list>p {
        margin-bottom: 1rem;
    }

    #call-to-action-list>:nth-child(1) {
        margin-bottom: 0.5rem;
    }

    #call-to-action-list>:nth-child(2) {
        margin-bottom: 0rem;
    }

    #call-to-action-list>ol>li {
        margin-bottom: 0.5rem;
    }

    #text-container a {
        color: #DD1C1A
    }

    #container p {
        text-align: justify;
    }

</style>