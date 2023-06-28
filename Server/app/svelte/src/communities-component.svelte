<svelte:options tag="communities-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { communities, addMarkersCommunities } from '/js/communities.js'

    // Import components
    import "/js/components/map-component.js" 
    
    // Main code

    function mapCallbackCommunities(createMap) {
        let map = createMap([51.505, -0.09],3)
        addMarkersCommunities(map)
    }

    onMount(() => { 

    })
</script>

<div id="container">
    <!--<img src="img/crowd.png" id="crowd" alt="crowd">-->
    <div id="text-container">
        <h1>Communities</h1>
        <img id="communities-img" src="/img/common/communities.svg" alt="communities">
        <p>We establish libertarian socialist communities by buying land, housing and the means of production which are then owned by the members of these communities. There is no private property within the communities and, therefore, exploitation and suffering that comes with it. Decisions are made using direct democracy with a focus on consensus, ensuring that each community member has power over decisions that affect their life. Communities try to establish their own cooperatives in order to finance their development becoming financially independent and sustainable, which allows for their survival and growth. Within communities the gift economy is utilized whenever possible. Each community is a small beacon of socialism within the dark capitalist world showing us how good life can be if only we achieve our goal.</p>
        <h3>Our communities</h3>
        <map-component id="map" callback={mapCallbackCommunities}></map-component>
        <h4>Europe</h4>
        {#each communities as community}
            <div class="location-info">
                <p><b>Location: </b>{community.location[0]}</p>
                <p><b>Status: </b>{community.status}</p>
                <p><b>Members: </b>{community.members}</p>
                <p><b>Contact: </b><a href={community.contact[0]} target=;_blank; rel=noreferrer>{community.contact[1]}</a></p>
            </div>
        {/each}
        
    </div>
</div>

<style>
    @import '/css/common.css';

    #communities-img {
        position: absolute;
        width: 11rem;
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
        max-width: 1200px;
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