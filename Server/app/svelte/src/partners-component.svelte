<svelte:options tag="partners-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { loadLocaleContent,getLocale } from "/js/libraries/serverTools.js"
    //import { communities, addMarkersCommunities } from '/js/communities.js'

    // Import components
    import "/js/components/map-component.js" 
    
    // Main code
    let loaded
    let locale = []
    let content = writable({})

    loadLocaleContent(content,"partners-component",loaded,(lang) => getLocale(locale,lang))

    let partners = [
        {
            name: "Gaia's Fall",
            type: {
                en: "a place to discuss and organize",
                ru: "место для общения и организации"
            },
            link: "https://discord.libsoc.org",
            description: {
                en: "Gaia's Fall is a server that promotes Solarpunk ideals, environmentalism, anarchism, and anti-capitalism. We encourage civil debates, discussions of theories and possibilities, and the creation of communities focused on shaping a better world. It is our official Discord server where we organize and work together.",
                ru: "Gaia's Fall — это сервер, который продвигает идеалы соларпанка, защиту окружающей среды, анархизм и антикапитализм. Мы поощряем гражданские дебаты, обсуждение теорий и возможностей, а также создание сообществ, сосредоточенных на формировании лучшего мира. Это наш официальный сервер Discord, на котором мы организуемся и работаем вместе"
            },
            logo: "gaias_fall"
        }
    ]

    onMount(() => { 

    })
</script>

{#key loaded}
    {#if Object.keys($content).length!=0}
        <div id="container">
            <!--<img src="img/crowd.png" id="crowd" alt="crowd">-->
            <div id="text-container">
                <h1>{$content.heading}</h1>
                <img id="hands-img" src="/img/common/handshake.svg" alt="hands">
                <p>{$content.p1}</p>
                <h3>{$content.subheading1}</h3>
                <h4>{$content.subheading2}</h4>
                {#each partners as partner}
                    <div class="location-info">
                        <div class="img-general-info">
                            <picture>
                                <source srcset={"/img/partners/"+partner.logo+".webp"}>
                                <source srcset={"/img/partners/"+partner.logo+".jpg"}>
                                <img class="partner-logo" alt="logo">
                            </picture>
                            <div>
                                <p><b>{$content.name}: </b>{partner.name}</p>
                                <p><b>{$content.type}: </b>{partner.type[locale[0]]}</p>
                                <p><b>{$content.link}: </b><a href={partner.link[locale[0]]} target=;_blank; rel=noreferrer>{partner.link}</a></p>
                            </div>
                        </div>
                        <p><b>{$content.description}: </b>{partner.description[locale[0]]}</p>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
{/key}

<style>
    @import '/css/common.css';

    #hands-img {
        position: absolute;
        width: 10.5rem;
        left: 50%;
        transform: translate(-50%);
        z-index: 0;
        opacity: 0.2;
        margin-top: -2rem;
    }

    #text-container>:nth-child(3) {
        margin-top: 6rem;
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

    .partner-logo {
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
        margin-bottom: 2rem;
    }

    #container {
        margin: auto;
        max-width: 800px;
        margin-top: 1rem;
        margin-bottom: 4rem;
    }

    #container>div>p {
        margin-bottom: 1rem;
    }

    #container p {
        text-align: justify;
    }

    @media only screen and (max-width: 500px) {
        .img-general-info {
            display: flex;
            flex-direction: column;
            align-content: left;
            width: 100%;
            gap: 1rem;
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