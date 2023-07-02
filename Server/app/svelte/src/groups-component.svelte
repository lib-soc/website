<svelte:options tag="groups-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { groups, addMarkersGroups } from '/js/groups.js'
    import { loadLocaleContent,getLocale } from "/js/libraries/serverTools.js"
    
    // Import components
    import "/js/components/map-component.js" 
    
    // Main code
    let loaded
    let locale = []
    let content = writable({})

    loadLocaleContent(content,"groups-component",loaded,(lang) => getLocale(locale,lang))

    function mapCallbackGroups(createMap,content,locale) {
        let map = createMap([51.505, -0.09],3)
        addMarkersGroups(map,content,locale)
    }
    
    onMount(() => { 

    })
</script>

{#key loaded}
    {#if Object.keys($content).length!=0}
        <div id="container">
            <!--<img src="img/crowd.png" id="crowd" alt="crowd">-->
            <div id="text-container">
                <h1>{$content.heading}</h1>
                <img id="groups-img" src="/img/common/groups.svg" alt="groups">
                <p>{$content.p1}</p>
                <p>{$content.p2}</p>
                <h3>{$content.subheading1}</h3>
                <map-component id="map" callback={(createMap) => mapCallbackGroups(createMap,$content,locale)}></map-component>
                <h4>{$content.subheading2}</h4>
                {#each groups as group}
                    <div class="location-info">
                        <p><b>{$content.location}: </b>{group.location[0][locale[0]]}</p>
                        <p><b>{$content.members}: </b>{group.members}</p>
                        <p><b>{$content.contact}: </b><a href={group.contact[0]} target=;_blank; rel=noreferrer>{group.contact[1][locale[0]]}</a></p>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
{/key}

<style>
    @import '/css/common.css';

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

    h4 {
        margin-bottom: 2rem;
    }

    .location-info {
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

    #container>div>p {
        margin-bottom: 1rem;
    }

    #container p {
        text-align: justify;
    }

</style>