<svelte:options tag="legend-component" />

<script>

    // Import libraries
    import { onMount } from 'svelte'
    import { pullLegendData } from '/js/predict/charts.js'

    // Import components

    //Export
    export let option = null
    export let chart = null
    export let data = {}

    // Main code
    let legendData = []
    let buttons = []
    let dataKeys

    function init() {
        if (option==null || option==undefined || chart==null || chart==undefined) {
            setTimeout(init,100)
        }
        else {
            legendData = pullLegendData(legendData,option)
            for (let obj of legendData) {
                data[obj.name] = true
            }
            dataKeys = Object.keys(data)
        }
    }

    function toggleSeries(i) {
        data[dataKeys[i]] = !data[dataKeys[i]]
        let inds = []
        let ids = option.series.map((x) => x._id)
        let id = ids[i]
        for (let j=0;j<ids.length;j++) {
            if (ids[j]==id) {
                inds.push(j)
            }
        }
        for (let i of inds) {
            let series = option.series[i]
            if (!series.tooltip.show) {
                series.lineStyle.opacity = 1
                series.itemStyle.opacity = 1
                series.tooltip.show = true
                buttons[inds[0]].style.opacity = 1
            }
            else {
                series.lineStyle.opacity = 0
                series.itemStyle.opacity = 0
                series.tooltip.show = false
                buttons[inds[0]].style.opacity = 0.5
            }
        }

        chart.setOption(option)
    }

    onMount(() => {
        init()
    })
</script>

<div class="legend">
    {#each legendData as item, i}
        <button bind:this={buttons[i]} on:click={() => toggleSeries(i)}>
            <div class="marker" style="background-color: {item.color}"></div>
            <span>{item.name}</span>
        </button>
    {/each}
</div>


<style>
    @import '/css/common.css';
    @import '/css/test-basic.css';

    button {
        cursor: pointer;
    }

    .legend {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }

    .legend * {
        font-family: var(--sans-serif);
    }

    .marker {
        position: relative;
        display:inline-block;
        margin-right: 0.5rem;
        top: 0.1rem;
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
    }
</style>