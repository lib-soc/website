<svelte:options tag="switch-component" />

<script>

    // Import libraries
    import { onMount } from 'svelte'
    import { px2rem,getTextWidth,getCanvasFont } from "/js/libraries/miscTools.js"

    //Export
    export let callback = null
    export let checked = false
    export const toggle = () => {
        let f = () => {
            if (callback != null) {
                checked = !checked
                callback()
            }
            else {
                toggle()
            }
        }
        setTimeout(f,100)
    }

    function toggleClick() {
        if (callback != null) {
            checked = !checked
            callback()
        }
    }
    
    // Main code

    onMount(() => {

    })
</script> 

<label class="switch">
    <input type="checkbox" bind:checked={checked} on:click={toggleClick}> 
    <span class="switch-span"></span>
</label>

    
<style>

    @import '/css/common.css';

    .switch span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: calc(2* 1.2rem);
    }

    .switch span:before {
        position: absolute;
        content: "";
        height: calc(var(--height) - 0.5rem);
        width: calc(var(--height) - 0.5rem);
        left: calc(0.3rem);
        bottom: 0.25rem;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }

    .switch input:checked + .switch-span {
        background-color: var(--pink);
    }

    .switch input:hover + .switch-span {
        box-shadow: 0 0 0 var(--pink);
    }

    .switch input:checked + .switch-span:before {
        -webkit-transform: translateX(calc(var(--width) - var(--height)/2 - 2*0.6rem));
        -ms-transform: translateX(calc(var(--width) - var(--height)/2 - 2*0.6rem));
        transform: translateX(calc(var(--width) - var(--height)/2 - 2*0.6rem));
    }

    .switch {
        position: relative;
        display: inline-block;
        width: var(--width);
        height: var(--height);
    }

    .switch input { 
        position: absolute;
        width: var(--width);
        height: var(--height);
        opacity: 0;
    }

</style>