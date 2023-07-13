<svelte:options tag="compass-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { loadLocaleContent } from "/js/libraries/serverTools.js"
    import { shuffleArray } from "/js/libraries/miscTools.js"

    // Import components
    
    // Main code
    let loaded = writable(0)
    let content = writable({})
    loadLocaleContent(content,"countries",loaded)
    let locale = loadLocaleContent(content,"compass-component",loaded,contentCallback)

    let qTag = 0
    let answers = []

    let capitalismScore = ""
    let vanguardismScore = ""
    let socialismScore = ""

    function contentCallback(content) {
        for (let q of content.qs) {
            shuffleArray(q.as)
        }
    }

    function next(i) {
        if (answers[i]!=undefined) {
            if (qTag < $content.qs.length) {
                if (qTag==($content.qs.length-1)) {
                    capitalismScore = Math.round(answers.map(x => x.includes("C")).filter(Boolean).length*100/answers.length).toString()
                    vanguardismScore = Math.round(answers.map(x => x.includes("V")).filter(Boolean).length*100/answers.length).toString()
                    socialismScore = Math.round(answers.map(x => x.includes("LS")).filter(Boolean).length*100/answers.length).toString()
                }
                qTag = qTag + 1
            }
        }
    }

    function back(i) {
        if (qTag!=0) {
            qTag = qTag - 1
        }
    }

    onMount(() => { 
   
    })
    /**/
</script>

{#key $loaded}
    {#if $loaded==2}
        <div id="container">
            <div id="text-container">
                <h1>{$content.heading}</h1>
                <img id="compass-img" src="/img/common/compass.svg" alt="compass">
                {#key qTag}
                {#if qTag!=$content.qs.length}
                    <p>{$content.qs[qTag].q}</p>
                    <div class="quiz-inputs">
                        {#each $content.qs[qTag].as as a,i}
                            <div class="radio-container">
                                <input type="radio" id={"option"+i} bind:group={answers[qTag]} name="options" value={a[1]}>
                                <button on:click={() => answers[qTag] = a[1]} class="input-label" for={"option"+i}>{a[0]}</button>
                            </div>
                        {/each}
                        </div>
                    <button on:click={() => back(qTag)} class="quiz-buttons">back</button><button on:click={() => next(qTag)} class="quiz-buttons">next</button>
                {:else}
                    <p>You are compatible with ...</p>
                    <ul class="results-list">
                        <li>capitalism by <span>{capitalismScore}</span>%</li>
                        <li>vanguardism by <span>{vanguardismScore}</span>%</li>
                        <li>libertarian socialism by <span>{socialismScore}</span>%</li>
                    </ul>
                    <button on:click={() => back(qTag)} class="quiz-buttons">back</button>
                {/if}
                {/key}
            </div>
        </div>
    {/if}
{/key}

<style>
    @import '/css/common.css';

    .results-list {
        margin-left: 2rem;
        margin-bottom: 2rem;
    }

    .results-list li {
        margin-bottom: 0.5rem;
    }

    .radio-container {
        display: grid;
        grid-template-columns: min-content auto;
        margin-bottom: 1rem;
    }

    .quiz-inputs {
        position: relative;
        margin-bottom: 2rem;
    }

    .quiz-inputs input {
        position: relative;
        top: -0.1rem;
        height: 1.2rem; 
        width: 1.2rem; 
        margin: auto;
        accent-color: #DD1C1A;
        cursor: pointer;
    }

    .quiz-inputs button {
        font-family: var(--serif,serif);
        font-size: 1.15rem;
        margin-left: 1rem;
        position: relative;
        top: -0.2rem;
        text-align: left;
    }

    .quiz-buttons:nth-of-type(1) {
        margin-right: 2rem;
    }

    .quiz-buttons {
        font-size: 1.3rem;
        color: white;
        padding: 1.5rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: #5B6970;
        border-radius: 1rem;
    }

    #compass-img {
        position: absolute;
        width: 9rem;
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

</style>