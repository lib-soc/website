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

    loadLocaleContent(content,"countries",loaded)
    let locale = loadLocaleContent(content,"landing-component",loaded,changeWidth)
    changeWidth(locale)

    onMount(() => { 

    })
</script>

{#key $loaded}
    {#if $loaded==2}
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
                        <h2>{$content.communesTitle}</h2>
                        <img id="communes-img" src="/img/common/commune.svg" alt="communes">
                        <p>{$content.communesText}</p>
                    </div>
                    <div>
                        <h2>{$content.cooperativesTitle}</h2>
                        <img id="coops-img" src="/img/common/coops.svg" alt="coops">
                        <p>{$content.cooperativesText}</p>
                    </div>
                    <div>
                        <h2>{$content.partiesTitle}</h2>
                        <img id="parties-img" src="/img/common/parties.svg" alt="coops">
                        <p>{$content.partiesText}</p>
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