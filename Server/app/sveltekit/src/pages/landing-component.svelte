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
    let grid
    let gridWidth
    let loaded = writable(0)
    let content = writable({})
    let entries = {}
    let entriesByCountry ={}

    function changeWidth(locale) {
        if (locale=="ru") {
            gridWidth = "1fr 1fr"
        }
        else {
            gridWidth = "1fr 1fr"
        }
    }

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
    getData("/assets/trade-unions.json",(response) => callback(response,"tradeUnions"))

    loadLocaleContent(content,"groups-component",loaded)
    loadLocaleContent(content,"communes-component",loaded)
    loadLocaleContent(content,"cooperatives-component",loaded)
    loadLocaleContent(content,"parties-component",loaded)
    loadLocaleContent(content,"trade-unions-component",loaded)

    loadLocaleContent(content,"countries",loaded)
    let locale = loadLocaleContent(content,"landing-component",loaded,changeWidth)
    changeWidth(locale)

    function mapCallback(createMap,content,locale) {
        let map = createMap([22, 0],2)
        let options = {
            enableCountryGrouping: true,
        }
        let groupsMarkersLayer = addMarkersEntries(entries["groups"],entriesByCountry["groups"],map,content,locale,addGroupPinContent,"green",options)
        let partiesMarkersLayer = addMarkersEntries(entries["parties"],entriesByCountry["parties"],map,content,locale,addPartyPinContent,"gold",options)
        let tradeUnionsMarkersLayer = addMarkersEntries(entries["tradeUnions"],entriesByCountry["tradeUnions"],map,content,locale,addPartyPinContent,"violet",options)
        let coopsMarkersLayer = addMarkersEntries(entries["cooperatives"],entriesByCountry["cooperatives"],map,content,locale,addCoopPinContent,"blue",options)
        let communesMarkersLayer = addMarkersEntries(entries["communes"],entriesByCountry["communes"],map,content,locale,addCommunePinContent,"red",options)
        

        let overlayMaps = {}
        overlayMaps[content.groups] = groupsMarkersLayer
        overlayMaps[content.parties] = partiesMarkersLayer
        overlayMaps[content.tradeUnions] = tradeUnionsMarkersLayer
        overlayMaps[content.cooperatives] = coopsMarkersLayer
        overlayMaps[content.communes] = communesMarkersLayer
        
        L.control.layers(null, overlayMaps).addTo(map)
    }

    onMount(() => { 

    })
</script>

{#key $loaded}
    {#if $loaded==12}
        <div id="container">
            <picture>
                <source srcset="/img/crowd.webp">
                <source srcset="/img/crowd.png">
                <img id="crowd" alt="crowd">
            </picture>
            <div id="text-container">
                <p>{$content.top}</p>
                <div bind:this={grid} id="container-grid" style="--grid-width: {gridWidth}">
                    <div>
                        <a href={"/" + locale + "/groups"}><h2>{$content.groupsTitle}</h2></a>
                        <img id="groups-img" src="/img/common/groups.svg" alt="groups">
                        <p>{$content.groupsText}</p>
                    </div>
                    <div>
                        <a href={"/" + locale + "/parties"}><h2>{$content.partiesTitle}</h2></a>
                        <img id="parties-img" src="/img/common/parties.svg" alt="coops">
                        <p>{$content.partiesText}</p>
                    </div>
                    <div>
                        <a href={"/" + locale + "/trade-unions"}><h2>{$content.tradeUnionsTitle}</h2></a>
                        <img id="trade-unions-img" src="/img/common/trade-unions.svg" alt="trade unions">
                        <p>{$content.tradeUnionsText}</p>
                    </div>
                    <div>
                        <a href={"/" + locale + "/coops"}><h2>{$content.cooperativesTitle}</h2></a>
                        <img id="coops-img" src="/img/common/coops.svg" alt="coops">
                        <p>{$content.cooperativesText}</p>
                    </div>
                    <div>
                        <a href={"/" + locale + "/communes"}><h2>{$content.communesTitle}</h2></a>
                        <img id="communes-img" src="/img/common/communes.svg" alt="communes">
                        <p>{$content.communesText}</p>
                    </div>
                </div>
                <!--
                <div id="values-container">
                    <h1>Our Values</h1>
                    <h2>Environmentalism</h2>
                    <p>We are committed to environmental preservation and the urgent need to safeguard our planet's biodiversity. We embrace sustainable practices, such as permaculture, as essential components of our vision for the future. We emphasize the harmonious integration of landscapes, ecosystems, and human settlements. We strive to create resilient and self-sustaining systems that promote biodiversity, enhance soil fertility, conserve water resources, and foster ecological balance.</p>
                    <h2>Against animal exploitation</h2>
                    <p>We embrace a compassionate approach to our relationship with animals, recognizing the inherent value and welfare of all sentient beings. We strive to build a more harmonious coexistence between humans and animals, promoting sustainable and cruelty-free practices that benefit both the planet and its inhabitants. This commitment reflects our deep understanding of the interconnectedness of all living beings.</p>
                    <h2>Queer liberation</h2>
                    <p>We strive for a society free from the constraints and hierarchies imposed by gender or sexual norms. We envision a world where the word “queer” becomes meaningless because individuals are not defined or limited by their assigned gender at birth, where the binary constructs of male and female are dismantled, and where everyone can freely express their authentic selves without fear of discrimination or marginalization.</p>
                    <h2>Racial Justice</h2>
                    <p>We actively challenge and dismantle systemic racism, discrimination, and inequality in all its forms. We advocate for a society that recognizes and celebrates the diversity of human experiences, irrespective of their race or ethnicity. We strive to address the historical and ongoing impacts of racism, dismantle racist structures, and uplift marginalized communities.</p>
                    <h2>Anti-Imperialism</h2>
                    <p>We stand in solidarity with indigenous peoples and support their right to self-determination, land sovereignty, and cultural preservation. We challenge global systems that exploit and subjugate nations and communities.</p>
                    <h2>Peace and non-violence</h2>
                    <p>We promote peaceful resolutions to conflicts and oppose war, militarization, and violence. We advocate for non-violent strategies that address social issues and create lasting positive change.</p>
                </div>
                -->
                <h1 id="find-us">{$content.findUs}</h1>
                <map-component id="map" callback={(createMap) => mapCallback(createMap,$content,locale)} colors={["#23AC20","#FFD326","#9D35CD","#217BC9","#CA2437"]}></map-component>
                <h1>{$content.whatNow}</h1>
                <div id="action-container">
                    <a class="link-button" href={"/" + locale + "/join-us"}>{$content.joinUs}</a>
                    <a class="link-button"  href="https://discord.gg/Qk8KUk787z" target="_blank" rel=noreferrer >{$content.talkWithUs}</a>
                </div>
            </div>
        </div>
    {/if}
{/key}

<style>
    @import '/css/common.css';

    #values-container {
        margin-bottom: 3rem;
    }

    #action-container {
        display: flex;
        justify-content: space-between;
        margin: auto;
        margin-top: 2rem;
        max-width: 34rem;
    }

    .link-button {
        display: inline-block;
        font-size: 1.6rem;
        font-family: var(--sans-serif,sans-serif);
        width: 14rem;
        line-height: 4rem;
        background: var(--red);
        color: white;
        text-align: center;
    }

    #map {
        --margin-top: 1rem;
        --height: 30rem;
        --width: 100%;
        --margin-bottom: 3rem;
    }

    h1 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 1rem;
    }

    #container-grid > div > a > h2 {
        text-align: center;
    }
    
    #groups-img, #communes-img, #coops-img, #parties-img, #trade-unions-img {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        z-index: 0;
        opacity: 0.2;
        height: 8rem;
    }

    #coops-img {
        margin-top: 0.5rem;
        height: 7.5rem;
    }

    #trade-unions-img {
        margin-top: 0.5rem;
        height: 7.5rem;
    }

    #text-container {
        max-width: calc(100vw - 4rem);
        margin: auto;
    }

    #crowd {
        width: 100%;
        height: min(248.25px,calc(100vw / 3.2225));
        margin-bottom: 2rem;
    }

    #container {
        margin: auto;
        max-width: 800px;
        margin-top: 2rem;
        margin-bottom: 5rem;
    }

    #container>div>p {
        margin-bottom: 1rem;
    }

    #container p {
        text-align: justify;
    }

    #container-grid {
        display: grid;
        grid-template-columns: var(--grid-width);
        grid-template-rows: auto auto;
        grid-gap: 4rem;
        row-gap: 2.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    #container-grid>:last-child {
        grid-column: 1/span 2;

    }

    #container-grid > div {
        position: relative;
    }

    #container-grid > div > p {
        position: relative;
        margin-top: 5rem;
        z-index: 2;
    }

    @media only screen and (max-width: 1060px) {
        #container-grid {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        #action-container {
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
        }

        #container-grid >:nth-child(2) {
            height: calc(100% - 2rem);
        }

    }

</style>