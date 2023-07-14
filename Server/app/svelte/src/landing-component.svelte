<svelte:options tag="landing-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { addMarkersGroups, groupsMarkersLayer } from '/js/groups.js'
    import { addMarkersCoops, coopsMarkersLayer } from '/js/coops.js'
    import { addMarkersCommunes, communesMarkersLayer } from '/js/communes.js'
    import { addMarkersParties, partiesMarkersLayer } from '/js/parties.js'
    import { loadLocaleContent } from "/js/libraries/serverTools.js"

    // Import components
    import "/js/components/map-component.js" 

    // Main code
    let grid
    let gridWidth
    let loaded = writable(0)
    let content = writable({})

    function changeWidth(locale) {
        if (locale=="ru") {
            gridWidth = "1fr 1fr"
        }
        else {
            gridWidth = "1fr 1fr"
        }
    }

    loadLocaleContent(content,"groups-component",loaded)
    loadLocaleContent(content,"communes-component",loaded)
    loadLocaleContent(content,"cooperatives-component",loaded)
    loadLocaleContent(content,"parties-component",loaded)
    loadLocaleContent(content,"countries",loaded)
    let locale = loadLocaleContent(content,"landing-component",loaded,changeWidth)
    changeWidth(locale)

    function mapCallback(createMap,content) {
        let map = createMap([22, 0],2)
        addMarkersGroups(map,content)
        addMarkersCommunes(map,content)
        addMarkersCoops(map,content)
        addMarkersParties(map,content)

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
    {#if $loaded==6}
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
                        <a href={"/" + locale + "/communes"}><h2>{$content.communesTitle}</h2></a>
                        <img id="communes-img" src="/img/common/commune.svg" alt="communes">
                        <p>{$content.communesText}</p>
                    </div>
                    <div>
                        <a href={"/" + locale + "/coops"}><h2>{$content.cooperativesTitle}</h2></a>
                        <img id="coops-img" src="/img/common/coops.svg" alt="coops">
                        <p>{$content.cooperativesText}</p>
                    </div>
                    <div>
                        <a href={"/" + locale + "/parties"}><h2>{$content.partiesTitle}</h2></a>
                        <img id="parties-img" src="/img/common/parties.svg" alt="coops">
                        <p>{$content.partiesText}</p>
                    </div>
                </div>
                <h1>{$content.findUs}</h1>
                <map-component id="map" callback={(createMap) => mapCallback(createMap,$content)} colors={["#23AC20","#CA2437","#217BC9","#FFD326"]}></map-component>
                <h1>{$content.whatNow}</h1>
                <div id="action-container">
                    <a class="link-button" href={"/" + locale + "/join-us"}>{$content.joinUs}</a>
                    <a class="link-button"  href="https://discord.gg/xAPZmyr8B6" target="_blank" rel=noreferrer >{$content.talkWithUs}</a>
                </div>
            </div>
        </div>
    {/if}
{/key}

<style>
    @import '/css/common.css';

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
        background: #cb1816;
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
    }

    #container-grid > div > a > h2 {
        text-align: center;
    }
    
    #groups-img, #communes-img, #coops-img, #parties-img {
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

    #text-container {
        max-width: calc(100vw - 4rem);
        margin: auto;
    }

    #crowd {
        width: 100%;
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
        grid-template-rows: var(--grid-width);
        grid-gap: 4rem;
        row-gap: 3rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
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