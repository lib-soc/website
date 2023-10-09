
<script>
    // Import components
    import CloudGenerator from "/components/cloud-generator.svelte"
    import NavBarLogged from "/components/navbar/navbar-logged.svelte"
    import LandingComponent from "/pages/landing-component.svelte"
    import FooterLogged from "/components/footer/footer-logged.svelte"
</script>

<CloudGenerator></CloudGenerator>
<div id="content">
    <NavBarLogged></NavBarLogged>
    <LandingComponent></LandingComponent>
    <FooterLogged></FooterLogged>
</div>

<style>
    @import '/css/common.css';
</style>