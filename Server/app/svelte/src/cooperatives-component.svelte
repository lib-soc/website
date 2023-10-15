<svelte:options tag="cooperatives-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { loadLocaleContent, getData} from "/js/libraries/serverTools.js"
    import { addMarkersEntries, translate } from "/js/libraries/mapTools.js"
    import { addCoopPinContent } from "/js/mapFuncs.js"
    
    // Import components
    import "/js/components/map-component.js" 
    
    // Main code
    let loaded = writable(0)
    let content = writable({})
    let entries
    let entriesByCountry

    let locale = loadLocaleContent(content,"cooperatives-component",loaded)
    loadLocaleContent(content,"countries",loaded)

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
    getData("/assets/cooperatives.json",callback)

    function mapCallback(createMap,content,locale) {
        let map = createMap([22, 0],2)
        let options = {
            enableCountryGrouping: true,
        }
        addMarkersEntries(entries,entriesByCountry,map,content,locale,addCoopPinContent,"blue",options)
    }

    function getCountry(x) {
        return locale=="en" ? x : translate($content,x)
    }

    function getAddress(g) {
        let location = [g.country,g.state,g.town].filter(x => x!=null)
        return location.map(x => locale=="en" ? x : translate($content,x)).join(", ")
    }

    onMount(() => { 

    })
</script>

{#key $loaded}
    {#if $loaded==3}
        <div id="container">
            <div id="text-container">
                <h1>{$content.cooperatives}</h1>
                <img id="coops-img" src="/img/common/coops.svg" alt="coops">
                <p class="description">{$content.p1}</p>
                <h3>{$content.subheading1}</h3>
                <map-component id="map" callback={(createMap) => mapCallback(createMap,$content,locale)}></map-component>
                <p id="add-prompt">{$content["map-prompt"]}</p>
                {#each Object.entries(entriesByCountry) as [name,entries]}
                    <h4 class="country-name">{getCountry(name)}</h4>
                    <div class="country-block">
                        {#each entries as entry}
                            <div class="location-info">
                                <div class="img-general-info">
                                    <div>
                                        <p><b>{$content.name}: </b>{entry.name}</p>
                                        <p><b>{$content.location}: </b>{getAddress(entry)}</p>
                                        <p><b>{$content.market}: </b>{entry.market}</p>
                                        <p><b>{$content.workers}: </b>{entry.workers}</p>
                                        <p><b>{$content.status}: </b>{entry.status}</p>
                                        <p><b>{$content.website}: </b><a href={entry.website} target="_blank" rel=noreferrer>{entry.website}</a></p>
                                        <p><b>{$content.contact}: </b><a href={entry.contact} target=;_blank; rel=noreferrer>{entry.contact}</a></p>
                                    </div>
                                    <picture>
                                        <source srcset={"/img/coops/"+entry.logo+".webp"}>
                                        <source srcset={"/img/coops/"+entry.logo+".png"}>
                                        <img class="coop-logo" alt="logo">
                                    </picture>
                                </div>
                                <p><b>{$content.description}: </b>{entry.description}</p>
                            </div>
                        {/each}
                    </div>
                {/each}
            </div>
        </div>
    {/if}
{/key}

<style>
    @import '/css/common.css';

    .description {
        margin-bottom: 1rem;
    }

    #add-prompt {
        margin-bottom: 2rem;
    }

    #coops-img {
        position: absolute;
        width: 10.5rem;
        left: 50%;
        transform: translate(-50%);
        z-index: 0;
        opacity: 0.2;
    }

    #text-container>:nth-child(3) {
        margin-top: 8rem;
    }

    .img-general-info {
        display: flex;
        align-content: center;
        width: 100%;
        justify-content: space-between;
        gap: 3rem;
        align-items: center;
    }

    .img-general-info>:first-child {
        flex:none;
    }

    .coop-logo {
        position: relative;
        right: 0;
        max-height: 6rem;
        max-width: 100%;
    }

    .country-name {
        margin-bottom: 1rem;
    }

    .country-block {
        margin-bottom: 2rem;
    }

    .location-info {
        position: relative;
        margin-bottom: 2rem;
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
        max-width: calc(100vw - 4rem);
        margin: auto;
    }

    h1 {
        margin-bottom: 1rem;
        font-size: 2.2rem;
        text-align: center;
    }

    h3 {
        margin-top: 1rem;
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

    @media only screen and (max-width: 600px) {
        .img-general-info {
            display: flex;
            flex-direction: column-reverse;
            align-content: left;
            width: 100%;
            gap: 1rem;
            align-items: left;
            margin-bottom: 0rem;
        }

        .img-general-info>:nth-child(2) {
            width: max-content;
        }

        .img-general-info>:nth-child(1) {
            width: 100%;
        }
    }

</style>