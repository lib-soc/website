<svelte:options tag="reset-password-component" />

<script>

    // Import statements
    import { onMount } from 'svelte'

    // Export statements


    // Main code

    onMount(() => {


	})
</script>

<div id="container">
    <div id="text-container">
        <p>Contact us at our Discord Server. We are going to send a new password to the email that you used for registration.</p>
    </div>
</div>


<style>

    @import '/css/common.css';

    #text-container {
        position: relative;
        max-width: calc(100vw - 4rem);
        margin: auto;
    }

    #container {
        margin: auto;
        max-width: 800px;
        margin-top: 1rem;
        margin-bottom: 4rem;
    }

    #container p {
        text-align: justify;
    }

</style>