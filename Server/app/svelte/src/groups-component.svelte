<svelte:options tag="groups-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { addMarkersGroups, translate } from '/js/groups.js'
    import { loadLocaleContent, getData, sendData } from "/js/libraries/serverTools.js"
    
    // Import components
    import "/js/components/map-component.js" 
    
    // Main code
    let loaded = writable(0)
    let content = writable({})
    let groups
    let groupsByCountry

    let locale = loadLocaleContent(content,"groups-component",loaded)
    loadLocaleContent(content,"countries",loaded)

    let callback = (response) => {
        groups = JSON.parse(response)
        groupsByCountry = {}
        for (let g of groups) {
            let country = g.country
            if (g.contact==null) {
                g.contact = "https://discord.gg/Qk8KUk787z"
            }
            if (country in groupsByCountry) {
                groupsByCountry[country].push(g)
            }
            else {
                groupsByCountry[country] = [g]
            }
        }
        loaded.update((val) => {
            return val + 1
        })
    }
    getData("/assets/groups.json",callback)

    function mapCallbackGroups(createMap,content,locale) {
        let map = createMap([22, 0],2)
        addMarkersGroups(groups,groupsByCountry,map,content,locale)
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
            <!--<img src="img/crowd.png" id="crowd" alt="crowd">-->
            <div id="text-container">
                <h1>{$content.groups}</h1>
                <img id="groups-img" src="/img/common/groups.svg" alt="groups">
                <p class="description">{$content.p1}</p>
                <h3>{$content.subheading1}</h3>
                <map-component id="map" callback={(createMap) => mapCallbackGroups(createMap,$content,locale)}></map-component>
                <p id="add-prompt">{$content["map-prompt"]}</p>
                {#each Object.entries(groupsByCountry) as [name,groups]}
                    <h4 class="country-name">{getCountry(name)}</h4>
                    <div class="country-block">
                        {#each groups as group}
                            <div class="location-info">
                                <p><b>{$content.location}: </b>{getAddress(group)}</p>
                                <p><b>{$content.members}: </b>{group.members}</p>
                                <p><b>{$content.contact}: </b><a href={group.contact} target=;_blank; rel=noreferrer>{group.contact}</a></p>
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