<svelte:options tag="communities-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { communities, addMarkersCommunities } from '/js/communities.js'
    import { loadLocaleContent } from "/js/libraries/serverTools.js"

    // Import components
    import "/js/components/map-component.js" 
    
    // Main code
    let loaded
    let content = writable({})

    let locale = loadLocaleContent(content,"communities-component",loaded)

    function mapCallbackCommunities(createMap,content) {
        let map = createMap([51.505, -0.09],3)
        addMarkersCommunities(map,content)
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
                <img id="communities-img" src="/img/common/communities.svg" alt="communities">
                <p>{$content.p1}</p>
                <h3>{$content.subheading1}</h3>
                <map-component id="map" callback={(createMap) => mapCallbackCommunities(createMap,$content,locale)}></map-component>
                <h4>{$content.subheading2}</h4>
                {#each communities as community}
                    <div class="location-info">
                        <p><b>{$content.location}: </b>{$content[community.location[0]]}</p>
                        <p><b>{$content.status}: </b>{$content[community.status]}</p>
                        <p><b>{$content.members}: </b>{community.members}</p>
                        <p><b>{$content.contact}: </b><a href={community.contact[0]} target=;_blank; rel=noreferrer>{$content[community.contact[1]]}</a></p>
                    </div>
                {/each}
                
            </div>
        </div>
    {/if}
{/key}

<style>
    @import '/css/common.css';

    #communities-img {
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