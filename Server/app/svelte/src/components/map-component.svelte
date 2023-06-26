<svelte:options tag="map-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    
    // Import components

    // Export statements
    export let callback = null
    
    // Main code
    let mapContainer
    
    function createMap(center,zoom) {
        let map = L.map(mapContainer, {
            center: center,
            zoom: zoom,
        });
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minNativeZoom: 2,
            minZoom: 2,
            maxNativeZoom: 16,
            maxZoom: 16,
        }).addTo(map);
        return map
    }

    onMount(() => { 
        callback(createMap)
    })
</script>

<div bind:this={mapContainer} id="map"></div>


<style>
    @import 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';

    #map {
        height: var(--height);
        width: var(--width,100%);
        margin-bottom: var(--margin-bottom,0)
    }

</style>