<svelte:options tag="parties-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { partiesByCountry, addMarkersParties } from '/js/parties.js'
    import { loadLocaleContent } from "/js/libraries/serverTools.js"

    // Import components
    import "/js/components/map-component.js" 
    
    // Main code
    let loaded = writable(0)
    let content = writable({})

    loadLocaleContent(content,"countries",loaded)
    loadLocaleContent(content,"parties-component",loaded)

    function mapCallbackParties(createMap,content) {
        let map = createMap([22, 0],2)
        addMarkersParties(map,content)
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
                <img id="party-img" src="/img/common/parties.svg" alt="party">
                <p>{$content.p1}</p>
                <h3>{$content.subheading1}</h3>
                <map-component id="map" callback={(createMap) => mapCallbackParties(createMap,$content)}></map-component>
                {#each Object.entries(partiesByCountry) as [name,parties]}
                    <h4 class="country-name">{$content[name]}</h4>
                    <div class="country-block">
                        {#each parties as party}
                        <div class="location-info">
                            <div class="img-general-info">
                                <picture>
                                    <source srcset={"/img/parties/"+party.logo+".webp"}>
                                    <source srcset={"/img/parties/"+party.logo+".jpg"}>
                                    <img class="party-logo" alt="logo">
                                </picture>
                                <div>
                                    <p><b>{$content.name}: </b>{party.name}</p>
                                    <p><b>{$content.location}: </b>{$content[party.location[0]]}</p>
                                    <p><b>{$content.link}: </b><a href={party.link} target=;_blank; rel=noreferrer>{party.link}</a></p>
                                </div>
                            </div>
                            <p><b>{$content.description}: </b>{$content[party.description]}</p>
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

    #party-img {
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

    h4 {
        margin-bottom: 2rem;
    }

    .country-name {
        margin-bottom: 1rem;
    }

    .country-block {
        margin-bottom: 2rem;
    }

    .location-info {
        position: relative;
        margin-bottom: 1rem;
    }

    .location-info p {
        margin-bottom: 0;
    }

    .img-general-info {
        display: flex;
        align-content: center;
        width: 100%;
        gap: 1.5rem;
        align-items: center;
        margin-bottom: 0.75rem;
    }

    .img-general-info>:nth-child(2) {
        flex:none;
    }

    .party-logo {
        position: relative;
        right: 0;
        max-height: 5.5rem;
        max-width: 100%;
        border-radius: 1rem;
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

    @media only screen and (max-width: 500px) {
        .img-general-info {
            display: flex;
            flex-direction: column;
            align-content: left;
            width: 100%;
            gap: 1rem;
            align-items: left;
            margin-bottom: 0rem;
        }

        .img-general-info>:nth-child(1) {
            width: max-content;
        }

        .img-general-info>:nth-child(2) {
            width: 100%;
        }
    }

</style>