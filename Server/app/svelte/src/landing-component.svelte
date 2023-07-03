<svelte:options tag="landing-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { loadLocaleContent } from "/js/libraries/serverTools.js"
    import { writable } from 'svelte/store';

    // Import components
    

    // Main code
    let grid
    let gridWidth
    let loaded
    let content = writable({})

    function changeWidth(locale) {
        if (locale=="ru") {
            gridWidth = "1.2fr 1.05fr 1fr"
        }
        else {
            gridWidth = "1.2fr 1.1fr 1fr"
        }
    }

    let locale = loadLocaleContent(content,"landing-component",loaded,changeWidth)
    changeWidth(locale)

    onMount(() => { 

    })
</script>

{#key loaded}
    {#if Object.keys($content).length!=0}
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
                        <h2>{$content.groupsTitle}</h2>
                        <img id="groups-img" src="/img/common/groups.svg" alt="groups">
                        <p>{$content.groupsText}</p>
                    </div>
                    <div>
                        <h2>{$content.communitiesTitle}</h2>
                        <img id="communities-img" src="/img/common/communities.svg" alt="communities">
                        <p>{$content.communitiesText}</p>
                    </div>
                    <div>
                        <h2>{$content.cooperativesTitle}</h2>
                        <img id="coops-img" src="/img/common/coops.svg" alt="coops">
                        <p>{$content.cooperativesText}</p>
                    </div>
                </div>
            </div>
        </div>
    {/if}
{/key}

<style>
    @import '/css/common.css';

    #container-grid > div > h2 {
        text-align: center;
    }
    
    #groups-img, #communities-img, #coops-img {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        z-index: 0;
        opacity: 0.2;
        height: 8rem;
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
        max-width: 1000px;
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
        grid-gap: 4rem;
        margin-top: 2rem;
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
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 2rem;
        }
    }

</style>