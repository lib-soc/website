<svelte:options tag="landing-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'

    // Import components
    

    // Main code
    


    onMount(() => { 

    })
</script>

<div id="container">
    <picture>
        <source srcset="/img/crowd.webp">
        <source srcset="/img/crowd.png">
        <img id="crowd" alt="crowd">
    </picture>
    
    <div id="text-container">
        <p>We are people united around a singular cause: bringing down authoritarian exploitative systems represented by various forms of capitalism and replacing them with libertarian socialist systems, with the goal of creating a more equitable and democratic world.</p>
        <div id="container-grid">
            <div>
                <h2>GROUPS</h2>
                <img id="groups-img" src="/img/common/groups.svg" alt="groups">
                <p>We organize groups for the purposes of education, advocacy, and mutual aid. Our objective is to demonstrate to people how the current politico-economic systems detrimentally impact our well-being, present them with alternative approaches, and engage in mutual aid to alleviate the challenges of living under capitalism.</p>
            </div>
            <div>
                <h2>COMMUNITIES</h2>
                <img id="communities-img" src="/img/common/communities.svg" alt="communities">
                <p>We establish communities based on libertarian socialist principles, where communities have ownership of their land, houses, and the means of production as well as make decisions using direct democracy. We are gradually expanding our socialist world, one community at a time.</p>
            </div>
            <div>
                <h2>COOPERATIVES</h2>
                <img id="coops-img" src="/img/common/coops.svg" alt="coops">
                <p>We form worker cooperatives to finance the operations of our groups and communities. Recognizing that economic power influences political power, we consider the establishment of cooperatives to be one of the initial steps towards achieving socialism.</p>
            </div>
        </div>
    </div>
</div>

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
        grid-template-columns: 1.2fr 1.1fr 1fr;
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

    @media only screen and (max-width: 1000px) {
        #container-grid {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 2rem;
        }
    }

</style>