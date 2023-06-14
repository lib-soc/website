<svelte:options tag="select-component" />

<script>

    // Import libraries
    import { onMount } from 'svelte'
    import { px2rem,getTextWidth,getCanvasFont } from "/js/libraries/miscTools.js"

    //Export
    export let callback = null
    export let options = [""]
    export let value = null
    export let valueindex = null
    
    // Main code
    let root = arguments[0]
    let select
    let optionsHolder
    let optionButtons = []
    let currentOption
    let currentOptionButton
    let init = false
    let key = 0
    let obs = null

    $: setKeyValue(value,options)
    $: setKeyIndex(valueindex,options)
    $: changeOptionsWidth(select,optionsHolder)

    function setKeyValue(value,options) {
        if (value!==null) { 
            if (options.includes(value)) {
                let index = options.findIndex((element) => element==value)
                currentOption.innerHTML = value
                optionButtons[index].style.display = "none"
                valueindex = index
            }
            key += 1 
        }
    }

    function setKeyIndex(valueindex,options) {
        if (valueindex!=null && options!=undefined && options[valueindex]!=value) {
            value = options[valueindex]
            key += 1
        }
    }

    function indexToValue(index) {
        value = options[index]
    }

    function changeVisibility() {
        if (optionsHolder.style.display=="none") {
            optionsHolder.style.display = "initial"
        }
        else {
            optionsHolder.style.display = "none"
        }
    }

    function changeOption(index,callback) {
        valueindex = index
        value = options[index]
        if (callback!=undefined && callback!=null) {
            callback(index)
        }
    }
   
    function hideSelect() {
        optionsHolder.style.display = "none"
    }

    function changeOptionsWidth(select,optionsHolder) {
        let selectWidth
        if (select!=undefined && optionsHolder!=undefined) {
            let selectWidthText = getComputedStyle(select).getPropertyValue('--width')
            if (isNaN(selectWidthText) || selectWidthText=="") {
                if (obs==null) {
                    obs = new ResizeObserver(() => changeOptionsWidth(select,optionsHolder))
                    obs.observe(currentOptionButton)
                    return
                }
                else {
                    selectWidthText = getComputedStyle(currentOptionButton).getPropertyValue('width')
                    selectWidth = px2rem(parseFloat(selectWidthText.slice(0,selectWidthText.length-2)))
                }
            }
            else {
                selectWidth = parseFloat(selectWidthText.slice(0,selectWidthText.length-2))
            }
            let spanWidths = []
            for (let i=0;i<optionsHolder.children.length;i++) {
                let span = optionsHolder.children[i].children[0]
                let spanWidth = getTextWidth(span.innerHTML, getCanvasFont(span))
                spanWidths.push(spanWidth)
            }
            let maxOptionsWidth = px2rem(Math.max(...spanWidths))
            if (maxOptionsWidth>selectWidth) {
                let width = 1.1*maxOptionsWidth+"rem"
                optionsHolder.style.width = width
                for (let i=0;i<optionsHolder.children.length;i++) {
                    let button = optionsHolder.children[i]
                    button.style.width = width
                }
                optionsHolder.style.marginLeft = - (1.1*maxOptionsWidth - selectWidth) /2 - 0.05 + "rem"
            }
            else {
                let width = selectWidth + 0.1 + "rem"
                for (let i=0;i<optionsHolder.children.length;i++) {
                    let button = optionsHolder.children[i]
                    button.style.width = width
                }
            }
        }
    }

    onMount(() => {
        
        init = true
        root.addEventListener('focusout', hideSelect)
        
    })
</script> 

<div bind:this={select} class="select">
    {#key key}
        <button bind:this={currentOptionButton} id="current-option-button" on:click={changeVisibility}>
            <div id="current-options-div">
                <span bind:this={currentOption} id="current-options-span">{value!=null ? value : ""}</span>
            </div>
            <img id="arrow-down" src="../assets/arrow_down.svg" alt="arrow down">
        </button>
        <div bind:this={optionsHolder} id="options-holder" style="display: none">
            {#each options as option, i}
                <button bind:this={optionButtons[i]} value={i} on:click={() => changeOption(i,callback)}>
                    <span>{option}</span>
                </button>
            {/each}
        </div> 
    {/key}
</div>

    
<style>

    @import '/css/common.css';

    #current-options-div {
        position: relative;
        overflow: hidden;
        width: calc(100% - 2.5rem);
        text-align: var(--text-align,left);
        padding-top: 0.5rem;
    }

    #arrow-down {
        right: 0.5rem;
        width: 1.365rem;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .select {
        position: relative;
        margin-top: var(--margin-top,0);
        width: var(--width);
        max-width: var(--max-width);
        height: var(--height,2.75rem);
        border: var(--border,rgba(0,0,0,var(--opacity,1)) solid);
        border-width: var(--border-width, 0.063rem);
        border-radius: var(--border-radius,0.126rem);
    }

    .select button { 
        width: var(--width);
        max-width: var(--max-width);
    }

    #current-option-button, #current-option-button * {
        opacity: var(--opacity,1);
        font-family: var(--font-family,var(--serif), serif);
        font-size: var(--font-size, 1.3rem);
    }

    .select >:first-child { 
        margin-right: -2.75rem;
        padding-right: 0.0rem;
    }

    .select span {
        position: relative;
        padding-top: 0.5rem;
        white-space: nowrap;
    }

    #current-option-button {
        display: flex;
        width: 100%;
        height: 100%;
        padding-left: 0.341rem;
        font-weight: var(--font-weight,400);
    }

    #options-holder {
        position: absolute;
        margin-top: calc(-1 * var(--border-width, 0.063rem));
        background: white;
        z-index: 1;
        margin-left: -0.05rem;
        border-radius: var(--border-radius-options,0.126rem);
    }

    #options-holder * {
        font-size: var(--options-font-size, 1.2rem);
        font-family: var(--font-family,var(--serif), serif);
    }

    #options-holder button {
        display: flex;
        position: relative;
        width: var(--width);
        background: white;
        font-weight: 400;
        text-align: var(--text-align,left);
        padding-top: 0.341rem;
        padding-bottom: 0.341rem;
        padding-right: 3.515rem;
        padding-left: 0.341rem;
    }

    #options-holder button:hover {
        background: #cdcdcd;
    }

    #options-holder button {
        border: black solid;
        border-width: 0 var(--border-width-options,var(--border-width, 0.063rem)) 0 var(--border-width-options,var(--border-width, 0.063rem));
    }

    #options-holder >:first-child {
        border-top: black solid var(--border-width-options,var(--border-width, 0.063rem));
        border-top-left-radius: var(--border-radius-options,0.126rem);
        border-top-right-radius: var(--border-radius-options,0.126rem);
    }

    #options-holder >:last-child {
        border-bottom: black solid var(--border-width-options,var(--border-width, 0.063rem));
        border-bottom-left-radius: var(--border-radius-options,0.126rem);
        border-bottom-right-radius: var(--border-radius-options,0.126rem);
    }

</style>