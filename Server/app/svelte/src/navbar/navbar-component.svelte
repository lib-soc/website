<svelte:options tag="navbar-component" />

<script>

    // Import statements    
    import { onMount } from 'svelte'

    // Main code
    let hambInput
    let navbar

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

    onMount(() => {

    })

</script>

<!-- Navigation bar -->
<header bind:this={navbar} id="navbar">
    <!-- Logo -->
    <a id=logo-container href="/">
        <img src="img/common/flag.png" id="navbar-logo" alt="logo">
        <span id="navbar-logo-text">Libertarian socialists</span>
    </a>
    <!-- Hamburger icon -->
    <input bind:this={hambInput} type="checkbox" id="side-menu" on:click={changeNavbar}>
    <label id="hamb" for="side-menu"><span id="hamb-line"></span></label>
    <!-- Menu -->
    <nav id="nav">
        <ul id="menu">
            <li><a href="/manifesto">Manifesto</a></li>
            <li><a href="/join-us">Join Us</a></li>
            <li><a href="/groups">Groups</a></li>
            <li><a href="/communities">Communities</a></li>
            <li><a href="/cooperatives">Cooperatives</a></li>
            <li><a href="/affiliates">Affiliates</a></li>
        </ul>
    </nav>
</header>

<style>

@import '/css/common.css';
@import '/css/navbar.css';

</style>