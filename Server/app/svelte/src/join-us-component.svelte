<svelte:options tag="join-us-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { addMarkersGroups } from '/js/groups.js'
    import { addMarkersCoops } from '/js/coops.js'
    import { addMarkersCommunities } from '/js/communities.js'
    // Import components
    
    // Main code
    
    
    
    // Import components
    import "/js/components/map-component.js" 
    
    // Main code
    export function mapCallback(createMap) {
        let map = createMap([51.505, -0.09],3)
        addMarkersGroups(map)
        addMarkersCoops(map)
        addMarkersCommunities(map)
    }

    onMount(() => { 

    })
</script>


Are you against exploitation of one human being by another?
Do you agree that we should cooperate and not compete with each other?
In that case, you are already a libertarian socialist. Join us 

FInd our group, community or cooperative near you and join in order to make a world we both envision a reality. 

None of them near you? Not a problem! Join our WhatsApp group and we will help you get started.
<div id="container">
    <div id="text-container">
        <h1>Join Us</h1>
        <img src="/img/common/join-group.svg" id="join-group" alt="join group">
        <ol id="condition-list">
            <li>Are you against dictatorship and in favor of democracy?</li>
            <li>Are you against exploitation of one human being by another?</li>
            <li>Do you agree that we should cooperate and not compete with each other?</li>
            <p>If the answer is <b>YES</b>, then you are already a libertarian socialist. <b>JOIN US!</b></p>
        </ol>
        <h2>What You Will Get</h2>
        <ol id="value-proposition-list">
            <li>A community that is always ready to help with all your troubles;</li>
            <li>Access to the means of production of our cooperatives;</li>
            <li>Products and services at the cost of production or even for free;</li>
            <li>Monetary and non-monetary help with opening your own cooperative;</li>
            <p>and much more!</p>
        </ol>
        <h2>Find Us</h2>
        <div id="call-to-action-list">
            <p>Find our</p>
            <ol>
                <li><a href="/groups">group</a>,</li> 
                <li><a href="/communities">community</a> or</li> 
                <li><a href="/cooperatives">cooperative</a></li>
            </ol>
            <p>near you and join to help make a world we both envision a reality.</p>
        </div>
        <p>None of them near you? Not a problem! Join our <a href="https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh" target="_blank" rel=noreferrer>WhatsApp group</a> or <a href="https://discord.gg/xAPZmyr8B6" target="_blank" rel=noreferrer>Discord server</a> and we will help you start your own.</p>
        <map-component id="map" callback={mapCallback}></map-component>
    </div>
</div>

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
        list-style-position: outside
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
        max-width: 1200px;
        margin-top: 1rem;
        margin-bottom: 4rem;
    }

    #container>div>p {
        margin-bottom: 1rem;
    }

    #call-to-action-list>p {
        margin-bottom: 1rem;
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