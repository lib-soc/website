<svelte:options tag="loadscreen-component" />

<script>

    // Import libraries
    import { onMount } from 'svelte'

    // Import components

    // Main code
    let loadscreen

    onMount(() => {
        window.addEventListener('load', function() {
            loadscreen.parentNode.host.style.display = "none"
        })
	})

</script>
  
<div bind:this={loadscreen} id="loadscreen" style="width:100%; height: 100%; background:white; position: absolute; z-index: 100000"></div>

<style>



</style>