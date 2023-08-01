<svelte:options tag="map-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    
    // Import components

    // Export statements
    export let callback = null
    export let colors = null
    export let map = null
    
    // Main code
    let mapContainer
    
    function createMap(center,zoom) {
        map = L.map(mapContainer, {
            center: center,
            zoom: zoom,
        });
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minNativeZoom: 2,
            minZoom: 2,
            maxNativeZoom: 14,
            maxZoom: 14,
        }).addTo(map);
        return map
    }

    onMount(() => { 
        callback(createMap)
        if (colors!=null) {
            let els = mapContainer.getElementsByClassName("leaflet-control-layers-overlays")[0].children
            for (let i=0;i<els.length;i++) {
                els[i].children[0].children[0].style.accentColor = colors[i]
            }
        }
    })
</script>

<div bind:this={mapContainer} id="map"></div>


<style>
    @import 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';

    #map {
        height: var(--height);
        width: var(--width,100%);
        margin-top: var(--margin-top,0);
        margin-bottom: var(--margin-bottom,0);
        position: relative;
        z-index: 0;
    }

</style>