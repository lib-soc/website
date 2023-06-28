<svelte:options tag="cooperatives-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { coops, addMarkersCoops } from '/js/coops.js'
    
    // Import components
    import "/js/components/map-component.js" 
    
    // Main code
    function mapCallbackCoops(createMap) {
        let map = createMap([51.505, -0.09],3)
        addMarkersCoops(map)
    }

    onMount(() => { 

    })
</script>

<div id="container">
    <div id="text-container">
        <h1>Cooperatives</h1>
        <img id="coops-img" src="/img/common/coops.svg" alt="coops">
        <p>We establish worker cooperatives that embody a transformative business model where employees own and control the enterprise. Each worker has a voice in decision-making, and profits are distributed based on individual contributions. This participatory structure fosters ownership, motivation, and job satisfaction, creating a more fulfilling work experience as well as challenging the wealth concentration in traditional capitalist businesses.</p>
        <p>By focusing on employees' needs, our cooperatives create supportive and sustainable work environments that foster social cohesion and job security. We also prioritize the interests of local communities, taking a long-term perspective. With workers making decisions, we avoid harmful short-term profit-driven strategies and instead reinvest our profits, contributing to community development and resilience.</p>
        <h3>Our cooperatives</h3>
        <map-component id="map" callback={mapCallbackCoops}></map-component>
        <h4>Europe</h4>
        {#each coops as coop}
            <div class="location-info">
                <div class="img-general-info">
                    <div>
                        <p><b>Name: </b>{coop.name}</p>
                        <p><b>Location: </b>{coop.location[0]}</p>
                        <p><b>Market: </b>{coop.market}</p>
                        <p><b>Workers: </b>{coop.workers}</p>
                        <p><b>Status: </b>{coop.status}</p>
                        <p><b>Website: </b><a href={"https://www."+coop.website} target="_blank" rel=noreferrer>{coop.website}</a></p>
                        <p><b>Contact: </b><a href={coop.contact[0]} target=;_blank; rel=noreferrer>{coop.contact[1]}</a></p>
                    </div>
                    <picture>
                        <source srcset={"/img/coops/"+coop.logo+".webp"}>
                        <source srcset={"/img/coops/"+coop.logo+".png"}>
                        <img class="coop-logo" alt="logo">
                    </picture>
                </div>
                <p><b>Description: </b>{coop.description}</p>
            </div>
        {/each}
    </div>
</div>

<style>
    @import '/css/common.css';

    #coops-img {
        position: absolute;
        width: 10.5rem;
        left: 50%;
        transform: translate(-50%);
        z-index: 0;
        opacity: 0.2;
    }

    #text-container>:nth-child(3) {
        margin-top: 8rem;
    }

    .img-general-info {
        display: flex;
        align-content: center;
        width: 100%;
        justify-content: space-between;
        gap: 3rem;
        align-items: center;
    }

    .img-general-info>:first-child {
        flex:none;
    }

    .coop-logo {
        position: relative;
        right: 0;
        max-height: 8rem;
        max-width: 100%;
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

    @media only screen and (max-width: 600px) {
        .img-general-info {
            display: flex;
            flex-direction: column-reverse;
            align-content: left;
            width: 100%;
            gap: 1rem;
            align-items: left;
            margin-bottom: 0rem;
        }

        .img-general-info>:nth-child(2) {
            width: max-content;
        }

        .img-general-info>:nth-child(1) {
            width: 100%;
        }
    }

</style>