<svelte:options tag="groups-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { groupsByCountry, addMarkersGroups } from '/js/groups.js'
    import { loadLocaleContent} from "/js/libraries/serverTools.js"
    
    // Import components
    import "/js/components/map-component.js" 
    
    // Main code
    let loaded = writable(0)
    let content = writable({})

    loadLocaleContent(content,"groups-component",loaded)
    loadLocaleContent(content,"countries",loaded)

    function mapCallbackGroups(createMap,content) {
        let map = createMap([22, 0],2)
        addMarkersGroups(map,content)
    }
    
    onMount(() => { 
        //    {console.log(loaded)}
    })
</script>

{#key $loaded}
    {#if $loaded==2}
        <div id="container">
            <!--<img src="img/crowd.png" id="crowd" alt="crowd">-->
            <div id="text-container">
                <h1>{$content.heading}</h1>
                <img id="groups-img" src="/img/common/groups.svg" alt="groups">
                <p>{$content.p1}</p>
                <h3>{$content.subheading1}</h3>
                <map-component id="map" callback={(createMap) => mapCallbackGroups(createMap,$content)}></map-component>
                {#each Object.entries(groupsByCountry) as [name,groups]}
                    <h4 class="country-name">{$content[name]}</h4>
                    <div class="country-block">
                        {#each groups as group}
                            <div class="location-info">
                                <p><b>{$content.location}: </b>{$content[group.location[0][0]] + (group.location[0][1]=="" ? "" : ", " +  $content[group.location[0][1]])}</p>
                                <p><b>{$content.members}: </b>{group.members}</p>
                                <p><b>{$content.contact}: </b><a href={group.contact[0]} target=;_blank; rel=noreferrer>{$content[group.contact[1]]}</a></p>
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