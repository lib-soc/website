<svelte:options tag="pane-aligner" />

<script>

    // Import libraries
    import { getContext, setContext, onMount } from 'svelte'
    import { debounce } from "/js/libraries/miscTools.js"
    
    // Import components
     
    // Export statements

    // Main code
    let root
    let mainPane
    let sidebarLeft
    let sidebarLeft2
    let sidebarRight
    let parentProps = getContext("alignerParent")
    let switchView = parentProps!=undefined ? getContext("alignerParent").switchView : undefined

    let leftReplaced = false
    let left2Replaced = false
    let rightReplaced = false
    let switchViewReplaced = false

    function adjustSlotted() {
        if (root.parentNode!=null) {
            let slotted = root.parentNode.host.childNodes
            if (slotted.length==0) {
                setTimeout(adjustSlotted, 50)
            }
            else {
                let changed = false
                let html = root.parentNode.innerHTML
                for (let item of slotted) {
                    if (item.slot=="sidebar-left" && !leftReplaced) {
                        html = html.replace("#sidebar-left{display:none}","")
                        leftReplaced = true
                        changed = true
                    }
                    else if (item.slot=="sidebar-left2" && !left2Replaced) {
                        html = html.replace("#sidebar-left2{display:none}","")
                        left2Replaced = true
                        changed = true
                    }
                    else if (item.slot=="sidebar-right" && !rightReplaced){
                        html = html.replace("#sidebar-right{display:none;","#sidebar-right{")
                        rightReplaced = true
                        changed = true
                    }
                }
                if (switchView!=undefined && !switchViewReplaced) {
                    html = html.replace("1880px",switchView)
                    changed = true
                }
                if (changed) {
                    root.parentNode.innerHTML = html
                } 
            }
        }
    }
    window.addEventListener("resize", debounce(adjustSlotted,100))

    onMount(() => {
        adjustSlotted()
    })
</script>


<div bind:this={root} id="root" class="pane-centering">
    <div class="pane-container">
        <div id="sidebars-left" class="sidebar">
            <div bind:this={sidebarLeft} id="sidebar-left" class="pane">
                <slot name="sidebar-left"></slot>
            </div>
            <div bind:this={sidebarLeft2} id="sidebar-left2" class="pane">
                <slot name="sidebar-left2"></slot>
            </div>
        </div>
        <div bind:this={sidebarRight}  id="sidebar-right" class="pane sidebar">
            <slot name="sidebar-right"></slot>
        </div>
        <div bind:this={mainPane} id="main-pane" class="pane">
            <slot name="main" id="main-slot"></slot>
        </div>
    </div>
</div>
<style>
    @import '/css/common.css';

    .pane-container {
        display: block;
        margin-left: var(--total-margin-left,0rem);
    }

    #root {
        min-height: var(--min-height,auto);
    }

    #main-pane {
        position: relative;
        padding-left: var(--padding-left,0rem);
        padding-right: var(--padding-right,0rem);
        padding-top: var(--padding-top,0rem);
        padding-bottom: var(--padding-bottom,0rem);
        text-align: justify;
        background: var(--background,white);
        box-shadow: var(--box-shadow,0 0 0.314rem rgb(187, 187, 187));
        margin: auto;
        height: min-content; 
        max-width: var(--width-main,66rem);
        width: var(--width-main,66rem);
        z-index: 1;
        overflow-x: var(--overflow-x,hidden);
    }

    .sidebar {
        position: absolute;   
    }

    #sidebars-left {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-left: calc(-1*var(--width-left,22.5rem) - 1rem - 4rem);
        width: calc(var(--width-left,22.5rem) + 4rem);
    }

    #sidebar-left,#sidebar-left2 {
        position: relative;
        background-color: white;
        padding: 2rem 2rem;
    }

    #sidebar-left {
        display:none;
    }

    #sidebar-left2 {
        display:none;
    }

    #sidebar-right {
        display:none;
        margin-left: calc(var(--width-main,66rem) + 1rem);
        width: var(--width-right,auto);
        background-color: white;
        padding: 2rem 2rem;
    }

    @media only screen and (max-width: 1880px) {

        #main-pane {
            max-width: initial;
            width: 100%;
            max-width: var(--width-main,66rem);
            padding-left: var(--padding-left-mobile,1.8rem);
            padding-right: var(--padding-right-mobile,1.8rem);
            padding-top: var(--padding-top-mobile,1.8rem);
            padding-bottom: var(--padding-bottom-mobile,1.8rem);
        }

        #sidebars-left, #sidebar-right {
            position: relative;
            margin: auto;
            margin-top: 1rem;
            margin-bottom: 1rem;
            max-width: var(--width-main,66rem);
            width: 100%;
        }

        .pane-container {
            width: 95%;
            justify-items: center;
            grid-auto-flow: row;
            margin-left: 0;
        }
    }

</style>