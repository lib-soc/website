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
    <!--<img src="img/crowd.png" id="crowd" alt="crowd">-->
    <div id="text-container">
        <h1>Join us</h1>
        <div id="condition-list">
            <p>1. Are you against dictatorship and in favor of democracy?</p>
            <p>2. Are you against exploitation of one human being by another?</p>
            <p>3. Do you agree that we should cooperate and not compete with each other?</p>
            <p>If the answer is <b>YES</b>, then you are already a libertarian socialist. <b>JOIN US!</b></p>
        </div>
        <div id="call-to-action-list">
            <p>Find our</p>
            <ol>
                <li><a href="https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh">group</a>,</li> 
                <li><a href="https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh">community</a> or</li> 
                <li><a href="https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh">cooperative</a></li>
            </ol>
            <p>near you and join to help make a world we both envision a reality.</p>
        </div>
        <p>None of them near you? Not a problem! Join our <a href="https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh" target="_blank" rel=noreferrer>WhatsApp group</a> and we will help you start your own.</p>
        <map-component id="map" callback={mapCallback}></map-component>
    </div>
</div>

<style>
    @import '/css/common.css';

    #map {
        --height: 30rem;
        --width: 100%;
        --margin-bottom: 3rem;
    }

    ol>li {
        position: relative;
        font-size: 1.2rem;
        font-family: var(--serif,serif);
        left: 3rem;
    }

    #condition-list {
        margin-bottom: 2rem;
    }

    #condition-list>p {
        margin-bottom: 1rem;
    }

    #text-container {
        max-width: calc(100vw - 4rem);
        margin: auto;
    }

    h1 {
        margin-bottom: 1rem;
        font-size: 2.5rem;
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
        font-size: 1.2rem;
        color: #DD1C1A
    }

    #container p {
        font-size: 1.2rem;
        text-align: justify;
    }

</style>