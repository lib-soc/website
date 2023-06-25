<svelte:options tag="groups-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { groups, addMarkersGroups } from '/js/groups.js'
    
    // Import components
    import "/js/components/map-component.js" 
    
    // Main code
    export function mapCallbackGroups(createMap) {
        let map = createMap([51.505, -0.09],3)
        addMarkersGroups(map)
    }
    onMount(() => { 

    })
</script>

<div id="container">
    <!--<img src="img/crowd.png" id="crowd" alt="crowd">-->
    <div id="text-container">
        <h1>Groups</h1>
        <img id="groups-img" src="/img/common/groups.svg" alt="groups">
        <p>We aim to raise awareness about the negative impact of current politico-economic systems on our well-being. Through education, community engagement, and analysis, we reveal the flaws and inequalities in capitalist societies. By highlighting these issues, we empower people to question the status quo and imagine fairer and more sustainable alternatives.</p>
        <p>But our mission goes beyond theory. We believe in mutual aid and collective action to address immediate challenges within capitalism. Through mutual aid, we support each other by sharing resources, knowledge, and skills, fostering solidarity and resilience. Whether it's community gardens, food cooperatives, or support networks, our goal is to make life under capitalism more bearable and create pockets of resistance and alternatives within the system.</p>
        <h3>Our groups</h3>
        <map-component id="map" callback={mapCallbackGroups}></map-component>
        <h4>Europe</h4>
        {#each groups as group}
            <div class="location-info">
                <p><b>Location: </b>{group.location[0]}</p>
                <p><b>Members: </b>{group.members}</p>
                <p><b>Contact: </b><a href={group.contact[0]} target=;_blank; rel=noreferrer>{group.contact[1]}</a></p>
            </div>
        {/each}
    </div>
</div>

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
        font-size: 1.2rem;
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
        font-size: 2.5rem;
        text-align: center;
    }

    h3 {
        margin-bottom: 1rem;
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

    #container p {
        font-size: 1.2rem;
        text-align: justify;
    }

</style>