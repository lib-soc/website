<svelte:options tag="profile-component" />

<script>

    // Import libraries
    import { onMount, afterUpdate, setContext } from 'svelte'
    import { writable } from 'svelte/store'
    import * as AuthTools from "/js/libraries/authTools.js"
    import {svgFromObject} from "/js/libraries/miscTools.js"

    //Import components
    import "/js/components/pane-aligner.js"
    import "/js/components/profile-general.js"
    import "/js/components/profile-groups.js"
    import "/js/components/profile-communes.js"
    import "/js/components/profile-coops.js"
    import "/js/components/profile-parties.js"
    import "/js/components/profile-trade-unions.js"
    import "/js/components/groups-add-component.js"

    // Main code
    AuthTools.redirectNotLogged()

    let root
    let general
    let groups
    let communes
    let coops
    let parties
    let tradeUnions
    let panes
    let groupsAdd

    let generalButton
    let groupsButton
    let communesButton
    let coopsButton
    let partiesButton
    let tradeUnionsButton
    let buttons

    let currentPaneIndex = 0
    
    let locationPopup

    let maps = {}

    let user = {}
    let loaded = writable(0)
    let reloadTriggerVal = writable(0)
    AuthTools.getUser(user,loaded)
    
    function changePane(pane,button) {
        for (let p of panes) {
            p.style.display = "none"
        }
        for (let b of buttons) {
            styleField(b,400,"#636363")
        }
        pane.style.display = "initial"
        
        styleField(button,500,"#c52a28") 
    }

    function styleField(div,weight,color) {
        let svgObject = div.querySelector("object")
        if (svgObject==null) {
            let f = () => styleField(div,weight,color)
            setTimeout(f,100)
        }
        else {
            let svgItems = svgFromObject(svgObject)
            if (svgItems.length==0) {
                let f = () => styleField(div,weight,color)
                setTimeout(f,100)
            }
            else {
                div.style.fontWeight = weight
                for (let item of svgItems) {
                    let fill = item.getAttribute("fill")
                    if (fill!="#fff" && fill!=null) {
                        item.setAttribute("fill", color)
                    }
                }
            }
        }
    }

    function fillFields() {
        if (Object.keys(user).length!=0 && root!=undefined) {
            for (let b of buttons) {
                styleField(b,400,"#636363")
            }
            styleField(buttons[currentPaneIndex],500,"#c52a28") 
        }
        else {
            setTimeout(fillFields, 100)
        }
    }

    function valid(el) {
        return (el!=undefined) && (el!=null)
    }

    function init() {
        panes = [general,groups,communes,coops,parties]
        buttons = [generalButton,groupsButton,communesButton,coopsButton,partiesButton,tradeUnionsButton] 
        if ($loaded==1 && panes.every(x => valid(x)) && buttons.every(x => valid(x))) {
            panes = [general,groups,communes,coops,parties,tradeUnions]
            buttons = [generalButton,groupsButton,communesButton,coopsButton,partiesButton,tradeUnionsButton] 

            fillFields()
            general.style.display = "initial"
        }
        else {
            let f = () => init()
            setTimeout(f,100)
        }
    }

    function reloadTrigger() {
        reloadTriggerVal.update((val) => {
            return val + 1
        })
    }

    setContext("profile-component",{user,maps,reloadTrigger})

    onMount(() => {
        init()
    })  
</script>

<!--
<div bind:this={locationPopup} class="overlay" style="display: none">
    <div id="location-overlay-content">
        
    </div>
    <button class="overlay-button" on:click={() => locationPopup.style.display = "none"}></button>
</div>
-->
<pane-aligner>
    <div id="left-column" class="pane" slot="sidebar-left" bind:this={root}>
        <button bind:this={generalButton} on:click={() => changePane(general,generalButton)}>
            <object id="general-img" class="icons" type="image/svg+xml" data="/img/profile/icons/general.svg" title="general"></object>
            <span>general</span>
        </button>
        <button bind:this={groupsButton} on:click={() => changePane(groups,groupsButton)}>
            <object id="groups-img" class="icons" type="image/svg+xml" data="/img/common/groups.svg" title="groups"></object>            
            <span>groups</span>
        </button>
        <button bind:this={communesButton} on:click={() => changePane(communes,communesButton)}>
            <object id="communes-img" class="icons" type="image/svg+xml" data="/img/common/communes.svg" title="communes"></object>            
            <span>communes</span>
        </button>
        <button bind:this={coopsButton} on:click={() => changePane(coops,coopsButton)}>
            <object id="coops-img" class="icons" type="image/svg+xml" data="/img/common/coops.svg" title="coops"></object>            
            <span>cooperatives</span>
        </button>
        <button bind:this={partiesButton} on:click={() => changePane(parties,partiesButton)}>
            <object id="parties-img" class="icons" type="image/svg+xml" data="/img/common/parties.svg" title="parties"></object>            
            <span>parties</span>
        </button>
        <button bind:this={tradeUnionsButton} on:click={() => changePane(tradeUnions,tradeUnionsButton)}>
            <object id="trade-unions-img" class="icons" type="image/svg+xml" data="/img/common/trade-unions.svg" title="trade unions"></object>            
            <span>trade unions</span>
        </button>
        <button on:click={AuthTools.logout} id="logout-button">
            <object id="logout-img" class="icons" type="image/svg+xml" data="/img/profile/icons/logout.svg" title=""></object>            
            <span>logout</span>
        </button>
    </div>
    <div id="main-column" slot="main">
        {#key $loaded}
            {#if $loaded==1}
                <profile-general bind:this={general} style="display: none;"></profile-general>
                <profile-groups bind:this={groups} style="display: none;"></profile-groups> 
                <profile-parties bind:this={parties} style="display: none;"></profile-parties> 
                <profile-trade-unions bind:this={tradeUnions} style="display: none;"></profile-trade-unions> 
                <profile-coops bind:this={coops} style="display: none;"></profile-coops> 
                <profile-communes bind:this={communes} style="display: none;"></profile-communes> 
            {/if}
        {/key}
    </div>
</pane-aligner>


<style> 

    @import '/css/common.css';

    #general-img {
        top: 0rem;
    }

    #groups-img {
        top: 0.3rem;
    }

    #coops-img {
        top: 0rem;
    }

    #parties-img {
        top: 0rem;
    }

    #logout-img {
        width: 1.5rem;
    }

    #logout-button {
        padding-top: 1rem;
        padding-left: 0.1rem;
    }

    #left-column {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 15.2rem;
        padding: 2rem;
        border-radius: 0.64rem 0.64rem 0.64rem 0.64rem;
        gap: 1rem;
    }


    .icons {
        position: relative;
        width: 1.8rem;
    }

    #left-column button span {
        position: absolute;
        padding-left: 3.4rem;
        margin-top: 0rem;
        font-family: var(--sans-serif,sans-serif);
    }

    #left-column button {
        display: flex;
        flex-direction: row;
    }

    #main-column {
        padding: 1rem 2rem 1rem 2rem;
        height: 100%;
        width: 100%;
        border-radius: 0 0.64rem 0.64rem 0;
        flex-grow: 1;
        flex-shrink: 1;
        min-height: 20rem;
    }

    pane-aligner {
        --width-main: 800px;
        --width-left: 10.5rem;
    }

    @media only screen and (max-width: 1340px) {


        #left-column {
            position: relative;
            margin-left: 0rem;
            width: 100%;
            border-radius: 0.64rem 0.64rem 0rem 0;
        }

        #main-column {
            border-radius: 0.64rem;
            padding: 3rem 0.5rem;
            padding-bottom: 1.5rem;
            border-radius: 0rem 0rem 0.64rem 0.64rem;
            width: 100%;
        }

        #logout-button {
            position: relative;
            bottom: 0;
        }

        #left-column button {
            margin-left: auto;
            margin-right: auto;
            width: 10rem;
        }

        #logout-button {
            padding-top: 1rem;
            margin-bottom: 0rem;
        }
    }

</style> 