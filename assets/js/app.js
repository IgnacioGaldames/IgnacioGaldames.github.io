 $(document).ready(function() {   
    // Particles
    particlesJS.load('particles-js', '/assets/js/particles.min.json', function() {
        console.log('callback - particles.js config loaded');
    });

    // The Glitch
    function theGlitch() {
        $('#glitch').text('miTitulo');
    }
    theGlitch();

    WebFont.load({
        google: {
            families: ['Source Serif Pro','Source Sans Pro','Source Code Pro']
        }
    });
	//$(".cuentos .glitch").lettering();
});