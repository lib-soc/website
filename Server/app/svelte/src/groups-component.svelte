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
        <p>We try to raise awareness among individuals about the detrimental impact of the current politico-economic systems on our collective well-being. Through educational initiatives, community engagement, and critical analysis, we strive to illuminate the structural flaws and inherent inequalities that permeate capitalist societies. By shedding light on these systemic issues, we empower people to question the status quo and envision alternative paths towards a more just and sustainable future.</p>
        <p>However, our mission extends beyond theoretical exploration and ideological discourse. We firmly believe in the power of mutual aid and collective action to alleviate the immediate challenges and hardships faced within a capitalist framework. Through the practice of mutual aid, we actively support one another by sharing resources, knowledge, and skills, thereby fostering a sense of solidarity and resilience. Whether it's organizing community gardens, establishing local food cooperatives, or providing mutual support networks, our aim is to make life under capitalism more bearable and to cultivate pockets of resistance and alternatives within the existing system.</p>
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

    h4 {
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