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
        <p>We are people united around a single cause of bringing down authoritarian exploitative systems represented by different forms of capitalism and replacing them with libertarian socialist systems to create a more equitable and democratic world.</p>
        <div id="container-grid">
            <div>
                <h2>GROUPS</h2>
                <img id="groups-img" src="/img/common/groups.svg" alt="groups">
                <p>We organize into groups for education, advocacy and mutual aid. We aim to show people how the current politico-economic systems negatively affect our wellbeing, show them the alternatives, and engage in mutual aid to make our life under capitalism easier.</p>
            </div>
            <div>
                <h2>COMMUNITIES</h2>
                <img id="communities-img" src="/img/common/communities.svg" alt="communities">
                <p>We build communities according to libertarian socialist principles where people own their land, their houses, the means of production and use direct democracy to make decisions. We are growing our socialist world one community at a time.</p>
            </div>
            <div>
                <h2>COOPERATIVES</h2>
                <img id="coops-img" src="/img/common/coops.svg" alt="coops">
                <p>We create worker cooperatives in order to finance the functioning of our groups and communities. Economic power determines political power, therefore, establishing cooperatives is one of the first steps towards achieving socialism by providing democratic workplaces for workers instead of authoritarian capitalist businesses.</p>
            </div>
        </div>
    </div>
</div>

<style>
    @import '/css/common.css';

    #container-grid > div > h2 {
        text-align: center;
    }

    #groups-img {
        position: absolute;
        width: 14rem;
        left: 50%;
        transform: translate(-50%);
        z-index: 0;
        opacity: 0.2;
    }

    #communities-img {
        position: absolute;
        width: 11rem;
        left: 50%;
        transform: translate(-50%);
        z-index: 0;
        opacity: 0.2;
    }

    #coops-img {
        position: absolute;
        width: 10.5rem;
        left: 50%;
        transform: translate(-50%);
        z-index: 0;
        opacity: 0.2;
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
        max-width: 1200px;
        margin-top: 2rem;
        margin-bottom: 5rem;
    }

    #container>div>p {
        margin-bottom: 1rem;
    }

    #container p {
        font-size: 1.2rem;
        text-align: justify;
    }

    #container-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1.3fr;
        grid-gap: 3rem;
    }

    #container-grid > div {
        position: relative;
    }

    #container-grid > div > p {
        position: relative;
        margin-top: 7rem;
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