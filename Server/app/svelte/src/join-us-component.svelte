<svelte:options tag="join-us-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { addMarkersGroups } from '/js/groups.js'
    import { addMarkersCoops } from '/js/coops.js'
    import { addMarkersCommunities } from '/js/communities.js'
    import { loadLocaleContent, getLocale } from "/js/libraries/serverTools.js"

    // Import components
    import "/js/components/map-component.js" 

    // Main code
    let loaded
    let locale = []
    let content = writable({})

    loadLocaleContent(content,"join-us-component",loaded,(lang) => getLocale(locale,lang))

    function mapCallback(createMap,content,locale) {
        let map = createMap([51.505, -0.09],3)
        addMarkersGroups(map,content,locale)
        addMarkersCoops(map,content,locale)
        addMarkersCommunities(map,content,locale)
    }

    onMount(() => { 

    })
</script>

{#key loaded}
    {#if Object.keys($content).length!=0}
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
                    <ol>
                        <li><a href={"/" + locale[0] + "/groups"}>{$content.group}</a>,</li> 
                        <li><a href={"/" + locale[0] + "/communities"}>{$content.community}</a> {$content.or}</li> 
                        <li><a href={"/" + locale[0] + "/cooperatives"}>{$content.cooperative}</a></li>
                    </ol>
                    <p>{$content.nearYou}</p>
                </div>
                <p>{$content.noneNear} <a href="https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh" target="_blank" rel=noreferrer>{$content.WhatsAppGroup}</a> {$content.or} <a href="https://discord.gg/xAPZmyr8B6" target="_blank" rel=noreferrer>{$content.DiscordServer}</a>{$content.helpStart}</p>
                <map-component id="map" callback={(createMap) => mapCallback(createMap,$content,locale)}></map-component>
            </div>
        </div>
    {/if}
{/key}


<style>
    @import '/css/common.css';

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