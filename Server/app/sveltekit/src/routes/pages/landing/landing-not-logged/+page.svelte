
<script>
    // Import components
    import CloudGenerator from "/components/cloud-generator.svelte"
    import NavBarNotLogged from "/components/navbar/navbar-not-logged.svelte"
    import LandingComponent from "/pages/landing-component.svelte"
    import FooterNotLogged from "/components/footer/footer-not-logged.svelte"
</script>

<CloudGenerator></CloudGenerator>
<div id="content">
    <NavBarNotLogged></NavBarNotLogged>
    <LandingComponent></LandingComponent>
    <FooterNotLogged></FooterNotLogged>
</div>

<style>
    @import '/css/common.css';
</style>