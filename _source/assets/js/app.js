 $(document).ready(function() {   
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();
    particlesJS.load('particles-js', '/assets/js/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
});