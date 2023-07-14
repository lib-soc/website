<svelte:options tag="footer-component" />

<script>

    // Import statements
    import { writable } from 'svelte/store';
    import { loadLocaleContent } from "/js/libraries/serverTools.js"

    // Import components

    // Main code
    let loaded = writable(0)
    let content = writable({})

    loadLocaleContent(content,"countries",loaded)
    loadLocaleContent(content,"footer-component",loaded)

</script>
  
{#key $loaded}
    {#if $loaded==2}
        <footer>
            <div id="footer-content-container">
                <div id="footer-grid-content-container" class="logged">
                    <div id="contact-us-container">
                        <h2>{$content.contactUs}</h2>
                        <!--<p>Email: <a href="mailto:info@chiron.com">info@libsoc.org</a></p>-->
                        <p>Discord: <a href="https://discord.gg/xAPZmyr8B6" target="_blank" rel=noreferrer style="margin-left: 1.8rem;">{$content.inviteLink}</a></p>
                        <p>WhatsApp: <a href="https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh" target="_blank" rel=noreferrer style="margin-left: 0.5rem;">{$content.inviteLink}</a></p>
                    </div>
                </div>
                <button on:click={() => {location.href='#'}} id="footer-up" aria-label="go up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42.545" height="72.601" viewBox="0 0 42.545 72.601">
                        <g id="Group_268" data-name="Group 268" transform="translate(-6.177 -2.399)">
                        <rect id="Rectangle_146" data-name="Rectangle 146" width="11" height="51" rx="5.5" transform="translate(22 24)" fill="#cb1816"/>
                        <path id="Path_1145" data-name="Path 1145" d="M23.814,4.021a5,5,0,0,1,7.372,0l16.134,17.6c2.94,3.207,1.046,10.4-3.686,8.379S28.02,14.081,28.391,13.524,16.544,27.976,11.366,30,4.741,24.828,7.68,21.621Z" fill="#DD1C1A"/>
                        </g>
                    </svg>                              
                </button>
                <p id="footer-copyright">Licensed under a Creative Commons <a href="https://creativecommons.org/licenses/by/4.0/legalcode "  target="_blank" rel=noreferrer >CC BY 4.0 license</a></p>  
            </div>
        </footer>
    {/if}
{/key}

<style>

@import '/css/common.css';

/*---Footer----------------------------------------------------*/

footer {
    position: relative;
    bottom: 0;
    width: 100%;
    height: auto;
    background: #5B6970;/*var(--dark-green);*/
    border-top: #cb1816 solid 0.5rem;
}

footer p, footer a {
    font-family: var(--sans-serif);
}

#footer-content-container {
    position: relative;
    margin: auto;
    padding-top: 2rem;
    max-width: 116rem;
    width: 97vw;
}

#footer-grid-content-container {
    display: grid;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
}

.not-logged {
    grid-template-columns: auto auto auto 2rem;
}

.logged {
    grid-template-columns: auto auto 2rem;
}

footer h2 {
    color: #ffffff;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
}

#footer-copyright {
    position: relative;
    margin: auto;
    width: 100%;
    bottom: 0rem;
    height: 3rem;
    top: 0rem;
    margin-bottom: 0;
    font-size: 1rem;
    text-align: center;
}

#footer-copyright * {
    font-size: 1rem;
}


#tag-line {
    position: relative;
    margin: auto;
    font-size: 1.1rem;
    text-align: center;
    padding-bottom: 1rem;
}

footer a {
    font-size: 1.1rem;
    color: #ffffff;
}

footer p, footer label {
    display: block;
    font-size: 1.1rem;
    color: #d8d8d8;
    font-family: var(--sans-serif,sans-serif);
    margin-bottom: 0.5rem;
}

#newsletter-container h3 {
    margin-bottom: 0.99rem;
}

#newsletter-container p {
    width: 28.665rem;
    margin-bottom: 0.48rem;
}

#newsletterEmailInput {
    height: 2.5rem;
    width: 20.5rem;
    border: 0;
    border-radius: 0.4rem 0 0 0.4rem;
    filter: drop-shadow( 0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4));
}

#newsletterEmailInput::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--c,gray);
    opacity: 1; /* Firefox */
}  

#newsletterEmailButton {
    position: absolute;
    width: 6.8rem;
    height: 2.5rem;
    background: #F29E9D;
    color: #ffffff;
    font-family: var(--sans-serif,sans-serif);
    font-size: 1.4rem;
    border-radius: 0 0.2rem 0.2rem 0;
    filter: drop-shadow( 0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4));
}

#newsletterEmailButton:active {
    background: #E44644;
}

#contact-us-container {
    width: 16rem;
}

#contact-us-container h3 {
    margin-bottom: 0.99rem;
}

#legal-info-container {
    width: 9.6rem;
}

#legal-info-container h3 {
    margin-bottom: 0.99rem;
}

#legal-info-container p {
    margin-bottom: 0.48rem;
}

#legal-info-container a {
    display: block;
    margin-bottom: 0.48rem;
}


#footer-up {
    position: absolute;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 3.4rem;
    top: 4rem;
    right: 2rem;
    background: #ffffff;
}

#footer-up svg {
    width: 40%;
    height: auto;
}

.grass{
    position: absolute;
    top: -3.8rem;
    --height: 3.82rem;
    filter: drop-shadow( 0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4));
    z-index: -1;
}

@media only screen and (max-width: 1170px) {
    .not-logged {
        grid-template-rows: auto auto auto auto;
        grid-template-columns: auto;
        row-gap: 2rem;
    }

    .logged {
        grid-template-rows: auto auto auto;
        grid-template-columns: auto;
        row-gap: 2rem;
    }

    #footer-copyright {
        height: 1rem;
        top: -2rem;
    }

    #newsletterEmailInput {
        width: 18rem;
    }
}

</style>