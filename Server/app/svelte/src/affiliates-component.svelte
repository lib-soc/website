<svelte:options tag="affiliates-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    //import { communities, addMarkersCommunities } from '/js/communities.js'

    // Import components
    import "/js/components/map-component.js" 
    
    // Main code

    let affiliates = [
    {
        name: "Gaia's Fall",
        type: "a place to discuss and organize",
        link: "https://discord.libsoc.org",
        description: "Gaia's Fall is a server that promotes Solarpunk ideals, environmentalism, anarchism, and anti-capitalism. We encourage civil debates, discussions of theories and possibilities, and the creation of communities focused on shaping a better world. It is our official Discord server where we organize and work together.",
        logo: "gaias_fall"
    }
]

    onMount(() => { 

    })
</script>

<div id="container">
    <!--<img src="img/crowd.png" id="crowd" alt="crowd">-->
    <div id="text-container">
        <h1>Affiliates</h1>
        <img id="hands-img" src="/img/common/handshake.svg" alt="hands">
        <p>We affiliate with organizations and initiatives that align with our mission. Together, we are a united force driven by a shared worldview where there is no place for authoritarian exploitative systems, but where systems promoting equity and democracy thrive.</p>
        <h3>Our affiliates</h3>
        <h4>Online</h4>
        {#each affiliates as affiliate}
            <div class="location-info">
                <div class="img-general-info">
                    <picture>
                        <source srcset={"/img/affiliates/"+affiliate.logo+".webp"}>
                        <source srcset={"/img/affiliates/"+affiliate.logo+".png"}>
                        <img class="affiliate-logo" alt="logo">
                    </picture>
                    <div>
                        <p><b>Name: </b>{affiliate.name}</p>
                        <p><b>Type: </b>{affiliate.type}</p>
                        <p><b>Link: </b><a href={affiliate.link} target=;_blank; rel=noreferrer>{affiliate.link}</a></p>
                    </div>
                </div>
                <p><b>Description: </b>{affiliate.description}</p>
            </div>
        {/each}
        
    </div>
</div>

<style>
    @import '/css/common.css';

    #hands-img {
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
        gap: 1.5rem;
        align-items: center;
        margin-bottom: 1rem;
    }

    .img-general-info>:nth-child(2) {
        flex:none;
    }

    .affiliate-logo {
        position: relative;
        right: 0;
        max-height: 6rem;
        max-width: 100%;
        border-radius: 1rem;
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
        font-size: 1.15rem;
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
        margin-bottom: 2rem;
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
        font-size: 1.15rem;
        text-align: justify;
    }

    @media only screen and (max-width: 500px) {
        .img-general-info {
            display: flex;
            flex-direction: column;
            align-content: left;
            width: 100%;
            gap: 1.5rem;
            align-items: left;
            margin-bottom: 0rem;
        }

        .img-general-info>:nth-child(1) {
            width: max-content;
        }

        .img-general-info>:nth-child(2) {
            width: 100%;
        }
    }

</style>