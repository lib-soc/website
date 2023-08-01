<svelte:options tag="navbar-logged" />

<script>

    // Import statements    
    import { onMount, getContext } from 'svelte'
    import { writable } from 'svelte/store'
    import { loadLocaleContent, locales } from "/js/libraries/serverTools.js"

    // Main code
    let hambInput
    let navbar
    let localesDropdown
    let initiativesDropdown
    let loaded = writable(0)
    let content = writable({})
    let logoText

    let locale = loadLocaleContent(content,"navbar-component",loaded)

    function changeNavbar() {
        if (hambInput.checked) {
            navbar.style.background = "white"
            //navbar.style.boxShadow = "0 0 0.314rem rgb(187, 187, 187)"
        }
        else {
            setTimeout(()=> {
                navbar.style.position = "relative"
                navbar.style.background = ""
                navbar.style.boxShadow = ""
            }
            ,510)
            
        }
    }

    function showDropdown(dropdown) {
        let state = dropdown.style.display
        initiativesDropdown.style.display = "none"
        localesDropdown.style.display = "none"
        if (state=="block") {
            dropdown.style.display = "none"
        }
        else {
            dropdown.style.display = "block"
        }
    }

    function changeLocale(lang) {
        localStorage.setItem("locale",lang)
        let locSplit = location.href.split("/")
        let localesSymbols = Object.keys(locales)
        locSplit = locSplit.filter(x => !localesSymbols.includes(x))
        let loc = locSplit.slice(0,locSplit.length-1).join("/") + "/" + lang + "/" + locSplit[locSplit.length-1]
        location.href = loc
    }

    function fixHeading() {
        if (locale=="ru") {
            let func = () => {
                if (logoText==undefined) {
                    setTimeout(func,100)
                }
                else {
                    if (((window.innerWidth < 1700 && window.innerWidth > 1400) || window.innerWidth < 400) && logoText.style.lineHeight!="100%") {
                        logoText.style.lineHeight = "120%"
                        logoText.style.top = "1rem"
                        logoText.style.width = "16rem"
                    }
                    else if (((window.innerWidth > 1700) || (window.innerWidth > 400 && window.innerWidth < 1400)) && logoText.style.lineHeight!="400%") {
                        logoText.style.lineHeight = "400%"
                        logoText.style.top = "0rem"
                        logoText.style.width = "auto"
                    }
                }
            }
            func()
            addEventListener("resize", func)
        }
    }

    function hide(dropdown) {
        let callback = () => {
            dropdown.style.display = "none"
        }
        setTimeout(callback,100)
    }

    onMount(() => {
        fixHeading()
    })

</script>

<!-- Navigation bar -->
{#key loaded}
    {#if Object.keys($content).length!=0}
        <header bind:this={navbar} id="navbar">
            <!-- Hamburger icon -->
            <input bind:this={hambInput} type="checkbox" id="side-menu" on:click={changeNavbar}>
            <label id="hamb" for="side-menu"><span id="hamb-line"></span></label>
            <!-- Logo -->
            <a id=logo-container href={"/" + locale + "/"}>
                <img src="/img/common/flag.png" id="navbar-logo" alt="logo">
                <span bind:this={logoText} id="navbar-logo-text" >{@html $content.orgName}</span>
            </a>
            <!-- Menu -->
            <nav id="nav">
                <ul id="menu">
                    <li><a href={"/"+locale+"/join-us"}>{$content.joinUs}</a></li>
                    <li><a href={"/"+locale+"/manifesto"}>{$content.manifesto}</a></li>
                    <!-- Options dropdown -->
                    <!-- A list of links pointing to different pages of the website. Implemented as a div opened on :hover-->
                    <li id="options-container">
                        <button on:click={() => showDropdown(initiativesDropdown)} on:focusout={() => hide(initiativesDropdown)} class="options-button">{$content.initiatives}</button>
                        <div bind:this={initiativesDropdown} class="options-dropdown">
                            <a href={"/"+locale+"/groups"}>{$content.groups}</a>
                            <a href={"/"+locale+"/communes"}>{$content.communes}</a>
                            <a href={"/"+locale+"/cooperatives"}>{$content.cooperatives}</a>
                            <a href={"/"+locale+"/parties"}>{$content.parties}</a>
                            <a href={"/"+locale+"/partners"}>{$content.partners}</a>
                        </div>
                    </li>
                    <li><a href={"/"+locale+"/profile"}>{$content.profile}</a></li>
                    <li id="locales">
                        <button on:click={() => showDropdown(localesDropdown)} on:focusout={() => hide(localesDropdown)}>
                            <picture>
                                <source srcset="/img/common/globe.webp">
                                <source srcset="/img/common/globe.png">
                                <img id="locales-img" alt="globe">
                            </picture>
                        </button>
                    </li>
                    <div bind:this={localesDropdown} class="options-dropdown">
                        {#each Object.entries(locales) as [loc,name]}
                            <button on:click={() => changeLocale(loc)}>{name}</button>
                        {/each}
                    </div>
                </ul>
            </nav>
        </header>
    {/if}
{/key}


<style>

    @import '/css/common.css';
    @import '/css/navbar.css';

</style>