<svelte:options tag="footer-component" />

<script>

// Import components

</script>
  
<footer>
    <div id="footer-content-container">
        <div id="footer-grid-content-container" class="logged">
            <div id="contact-us-container">
                <h2>CONTACT US</h2>
                <p>Email: <a href="mailto:info@chiron.com">test@test</a></p>
            </div>
        </div>
        <button on:click={() => {location.href='#'}} id="footer-up" aria-label="go up">
            <svg xmlns="http://www.w3.org/2000/svg" width="42.545" height="72.601" viewBox="0 0 42.545 72.601">
                <g id="Group_268" data-name="Group 268" transform="translate(-6.177 -2.399)">
                  <rect id="Rectangle_146" data-name="Rectangle 146" width="11" height="51" rx="5.5" transform="translate(22 24)" fill="var(--pink)"/>
                  <path id="Path_1145" data-name="Path 1145" d="M23.814,4.021a5,5,0,0,1,7.372,0l16.134,17.6c2.94,3.207,1.046,10.4-3.686,8.379S28.02,14.081,28.391,13.524,16.544,27.976,11.366,30,4.741,24.828,7.68,21.621Z" fill="var(--pink)"/>
                </g>
            </svg>                              
        </button>
        <p id="footer-copyright">© 2023 LibSoc</p>  
    </div>
</footer>

<style>

@import '/css/common.css';
@import '/css/footer.css';

</style>