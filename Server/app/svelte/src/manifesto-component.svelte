<svelte:options tag="manifesto-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import { getData } from "/js/libraries/serverTools.js"
    import { px2rem } from "/js/libraries/miscTools.js"
    import { loadLocaleContent } from "/js/libraries/serverTools.js"

    // Import components
    

    // Main code
    let manifesto = []
    let key
    let contentButton
    let contentArrow
    let contentBlock
    let buttons = []
    let headingsObjects = {}
    let contentHeadings = []
    let contentTable
    let lastTop = 0
    let margin = 0
    let root
    let main

    let loaded
    let content = writable({})

    let locale = loadLocaleContent(content,"manifesto-component",loaded)
    

    const htmlDelims = ["ul","ol"]
    getData("/locales/"+ locale + "/manifesto.txt",function(response) {
        let splitText = response.split(/\r?\n/)
        let currentChapter
        let cnt = 0
        for (let j=0;j<splitText.length;j++) {
            let line = splitText[j]
            let delimInd = htmlDelims.map((x) => line.includes("<"+x+">")).findIndex((x) => x)
            if (delimInd!=-1) {
                let delim = htmlDelims[delimInd]
                let obj = {}
                obj[delim] = []
                let delimEndTag = "</"+delim+">"
                while (true) {
                    j += 1
                    line = splitText[j]
                    if (line.includes(delimEndTag)) {
                        manifesto.push(obj)
                        break
                    }
                    else {
                        obj[delim].push(line)
                    }
                }
            }
            else {
                if (line.slice(0,3)=="###") {
                    let heading = line.slice(4,line.length)
                    let id = heading.toLowerCase().trim().replaceAll(" ","-")
                    currentChapter.push({
                        id: id,
                        name: heading,
                        index: cnt
                    })
                    cnt += 1
                    manifesto.push({type: "h3", id: id, line: heading, index: cnt})
                }
                else if (line.slice(0,2)=="##") {
                    let heading = line.slice(3,line.length)
                    let id = heading.toLowerCase().trim().replaceAll(" ","-")
                    contentHeadings.push({
                        id: heading.toLowerCase().trim().replaceAll(" ","-"),
                        name: heading,
                        index: cnt
                    })
                    cnt += 1
                    currentChapter = []
                    contentHeadings.push(currentChapter)
                    manifesto.push({type: "h2", id: id, line: heading, index: cnt})
                }
                else {
                    manifesto.push(line)
                }
            }
        }
        key += 1
    })

    function hideBlock(arrow,block) {
        if (block.style.display=="none" || block.style.display=="") {
            block.style.display = "initial"
            arrow.style.transform = "scaleY(-1)"
            localStorage.setItem("manifesto-hide-content", "false"); 
        }
        else {
            block.style.display = "none"
            arrow.style.transform = ""
            localStorage.setItem("manifesto-hide-content", "true"); 
        }
    }

    function goToChapter(id) {
        headingsObjects[id].scrollIntoView({block: 'start'}, true);
    }
    
    addEventListener("scroll", (event) => {
        if (window.innerWidth>1080) {
            let top = px2rem(window.scrollY)
            let textBottom = px2rem(root.getBoundingClientRect().bottom + window.scrollY)
            let tableBottom = px2rem(contentTable.getBoundingClientRect().bottom + window.scrollY)
            if ((top>lastTop && top<5) || (top<lastTop && top<5)) {
                margin = -Math.min(px2rem(window.scrollY),5)
            }
            else if (tableBottom >= (textBottom - 1.5)) {
                margin = margin - (tableBottom - (textBottom - 1.5))
            }
            else {
                if (margin>-5) {
                    margin = -5
                }
                if (top<5 && top!=0) {
                    let dif = px2rem(contentTable.offsetHeight - window.innerHeight)
                    margin = -Math.min(px2rem(window.scrollY),5 + dif + 2.5)
                }
                else if (top<lastTop || margin==0) {
                    if (margin <-5) {
                        margin = margin + (lastTop-top)
                    }
                    else {
                        margin = -5
                    }
                }
                else {         
                    if (contentTable.offsetHeight > window.innerHeight) {
                        let dif = px2rem(contentTable.offsetHeight) - px2rem(window.innerHeight)
                        if (margin > -(dif+8)) {
                            margin = margin + (lastTop-top)
                        }
                        else {
                            margin = -(dif+8)
                        }
                    }
                }
            }
            contentTable.style.marginTop = margin + "rem"
            lastTop = px2rem(window.scrollY)
        }
        else {
            contentTable.style.marginTop = "0rem"
        }
    })

    onMount(() => { 
        let hideBool = localStorage.getItem("manifesto-hide-content")
        if (hideBool!=undefined && hideBool!=null) {
            if (hideBool=="true") {
                hideBlock(contentArrow,contentBlock)
            }
        }
    })
</script>

{#key loaded}
    {#if Object.keys($content).length!=0}
        <div id="container" bind:this={root}>
            <div id="text-container">
                {#key key}
                    <div bind:this={contentTable} id="table-content">
                        <button id="toggle-content" bind:this={contentButton} on:click={() => hideBlock(contentArrow,contentBlock)}>
                            {$content.tableOfContents}
                            <img bind:this={contentArrow} src="../assets/arrow_down.svg" alt="arrow down" style="transform: scaleY(-1)">
                        </button>
                        <div bind:this={contentBlock} class="module" style="display: initial;">
                            {#each contentHeadings as obj}
                                {#if Array.isArray(obj)}
                                    {#each obj as obj2}
                                    <div class="heading-button-wrapper">
                                        <button bind:this={buttons[obj2.index]} on:click={() => goToChapter(obj2.id)} class="level1 heading-button">
                                            {obj2.name}
                                        </button>
                                    </div>
                                    {/each}
                                {:else}
                                    <div class="heading-button-wrapper">
                                        <button bind:this={buttons[obj.index]} on:click={() => goToChapter(obj.id)} class="level0 heading-button">
                                            {obj.name}
                                        </button>
                                    </div>
                                {/if}
                            {/each}
                        </div>
                    </div>
                    <div id="main" bind:this={main}>
                        {#each manifesto as line}
                            {#if line!==""}
                                {#if typeof (line === 'object') && (Object.keys(line)[0]=="ul")}
                                    <ul>
                                        {#each line.ul as line2}
                                            <li>{line2}</li>
                                        {/each}
                                    </ul>
                                {:else if typeof (line === 'object') && (Object.keys(line)[0]=="ol")}
                                    <ol>
                                        {#each line.ol as line2}
                                            <li>
                                                {@html line2}
                                            </li>
                                        {/each}
                                    </ol>
                                {:else if typeof (line === 'object') && (line.type=="h3")}
                                    <button on:click ={contentTable.scrollIntoView({block: 'start'}, true)}  style="display: block;  width: 100%;">
                                        <h3 bind:this={headingsObjects[line.id]} id={line.id}>{@html line.line}</h3>
                                    </button>
                                {:else if typeof (line === 'object') && (line.type=="h2")}
                                    <button on:click ={contentTable.scrollIntoView({block: 'start'}, true)}  style="display: block;  width: 100%;">
                                        <h2 bind:this={headingsObjects[line.id]} id={line.id}>{@html line.line}</h2>
                                    </button>
                                {:else if line[0]=="#"}
                                    <h1>{@html line.slice(2,line.length)}</h1>
                                {:else}
                                    <p class="margin-end">
                                        {@html line}
                                    </p>
                                {/if}
                            {:else if false}
                                <b></b>
                            {/if}
                        {/each}
                    </div>
                {/key}
            </div>
        </div>
    {/if}
{/key}


<style>
    @import '/css/common.css';

    #main b {
        color: #d50400;
    }

    #table-content {
        position: fixed;
        display: flex;
        flex-direction: column;
        border: #cdcdcd 0.1rem solid;
        border-radius: 1rem;
        padding: 2rem;
        padding-top: 1rem;
        padding-right: 0.8rem;
        padding-bottom: 1.5rem;
        margin-bottom: 2rem;
        width: 20rem;
        height: max-content;
    }

    #toggle-content {
        position: relative;
        width: 100%;
        font-size: 1.2rem;
        font-family: var(--sans-serif,sans-serif);
        text-align: left;
        padding-bottom: 1rem;
        font-weight: bold;
        padding-top: 0.3rem;
    }

    #toggle-content img {
        position: absolute;
        top: 0.3rem;
        right: 0.8rem;
        width: 1.5rem;
    }

    .module {
        position: relative;
        display: inline-block;
        width: 100%;
        height: max-content;
        padding-right: 1.2rem;
    }

    .heading-button-wrapper {
       position: relative;
    }

    .heading-button {
        color: black;
        height: auto;
        width: 100%;
        padding-top: 0.25rem;
        padding-bottom: 0.35rem;
        text-align: left;
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.2rem;
    }

    .level0 {
        position: relative;
        padding-left: 0.5rem;
        z-index: 1;
    }

    .level1 {
        position: relative;
        padding-left: 1.5rem;
        z-index: 1;
        margin-left: 1rem;
        width: calc(100% - 1rem);
        border-left: #cdcdcd 0.1rem solid;
    }

    .heading-button:hover {
        background-color: hsla(344, 73%, 57%, 0.12);
    }

    .heading-button:active {
        background-color: hsla(344, 73%, 57%, 0.5);
    }

    h1 {
        margin-bottom: 1rem;
        font-size: 2rem;
        text-align: center;
    }

    h2 {
        margin-bottom: 1rem;
        text-align: center;
    }

    h3 {
        margin-bottom: 1rem;
    }

    #text-container {
        position: relative;
        display: grid;
        grid-template-columns: 20rem 700px 20rem;
        grid-gap: 2rem;
        max-width: calc(100vw - 4rem);
        margin: auto;
    }

    #container {
        display: flex;
        align-content: center;
        margin: auto;
        max-width: min(1800px,100vw);
        margin-top: 1rem;
        margin-bottom: 4rem;
    }

    #main {
        grid-column: 2;
    }

    #main>p {
        margin-bottom: 1rem;
    }

    #container p {
        text-align: justify;
    }

    @media only screen and (max-width: 1210px) {

        #text-container {
            position: relative;
            display: grid;
            grid-template-columns: auto;
            grid-gap: 2rem;
            max-width: calc(1800px,100vw - 4rem);
            margin: auto;
        }

        #toggle-content img {
            right: 0;
        }

        #table-content {
            position: relative;
            border: #a9a9a9 0.1rem solid;
            border-radius: 1rem;
            padding: 2rem;
            padding-bottom: 1.5rem;
            margin-bottom: 2rem;
            height: max-content;
            width: 100%;
        }

        .module {
            padding-right: 0;
        }

        #main {
            grid-column: 1;
        }

        #container {
            max-width: min(700px,100vw);
        }
    }

</style>