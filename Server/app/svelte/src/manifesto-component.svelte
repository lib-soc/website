<svelte:options tag="manifesto-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { getData } from "/js/libraries/serverTools.js"

    // Import components
    

    // Main code
    let manifesto = []
    let key
    
    const htmlDelims = ["ul","ol"]
    getData("/assets/manifesto.txt",function(response) {
        let splitText = response.split(/\r?\n/)
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
                manifesto.push(line)
            }
        }
        key += 1
    })

    onMount(() => { 

    })
</script>

<div id="container">
    <div id="text-container">
        {#key key}
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
                    {:else if line.slice(0,3)=="###"}
                        <h3>{@html line.slice(4,line.length)}</h3>
                    {:else if line.slice(0,2)=="##"}
                        <h2>{@html line.slice(3,line.length)}</h2>
                    {:else if line[0]=="#"}
                        <h1>{@html line.slice(2,line.length)}</h1>
                    {:else}
                        <p class="margin-end">
                            {@html line}
                        </p>
                    {/if}
                {/if}
            {/each}
        {/key}
    </div>
</div>


<style>
    @import '/css/common.css';

    h1 {
        margin-bottom: 1rem;
        font-size: 2.5rem;
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
        max-width: calc(100vw - 4rem);
        margin: auto;
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