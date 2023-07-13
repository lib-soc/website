<svelte:options tag="communes-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { communesByCountry, addMarkersCommunes } from '/js/communes.js'
    import { loadLocaleContent } from "/js/libraries/serverTools.js"

    // Import components
    import "/js/components/map-component.js" 
    
    // Main code
    let loaded = writable(0)
    let content = writable({})

    loadLocaleContent(content,"countries",loaded)
    let locale = loadLocaleContent(content,"communes-component",loaded)

    function mapCallbackCommunes(createMap,content) {
        let map = createMap([22, 0],2)
        addMarkersCommunes(map,content)
    }

    onMount(() => { 

    })
</script>

{#key $loaded}
    {#if $loaded==2}
        <div id="container">
            <!--<img src="img/crowd.png" id="crowd" alt="crowd">-->
            <div id="text-container">
                <h1>{$content.heading}</h1>
                <img id="commune-img" src="/img/common/commune.svg" alt="commune">
                <p>{$content.p1}</p>
                <h3>{$content.subheading1}</h3>
                <map-component id="map" callback={(createMap) => mapCallbackCommunes(createMap,$content,locale)}></map-component>
                {#each Object.entries(communesByCountry) as [name,communes]}
                    <h4 class="country-name">{$content[name]}</h4>
                    <div class="country-block">
                        {#each communes as commune}
                            <div class="location-info">
                                <p><b>{$content.location}: </b>{$content[commune.location[0][0]] + (commune.location[0][1]=="" ? "" : ", " +  $content[commune.location[0][1]])}</p>
                                <p><b>{$content.status}: </b>{$content[commune.status]}</p>
                                <p><b>{$content.members}: </b>{commune.members}</p>
                                <p><b>{$content.contact}: </b><a href={commune.contact[0]} target=;_blank; rel=noreferrer>{$content[commune.contact[1]]}</a></p>
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

    #commune-img {
        position: absolute;
        width: 11.5rem;
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
        --margin-bottom: 3rem;
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
        margin-bottom: 1rem;
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

    #container p {
        text-align: justify;
    }

</style>