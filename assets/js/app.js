$(document).ready(function () {
    // Wow
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();

    // PArticles
    particlesJS.load('particles-js', '/assets/js/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

    // The Glitch
    function theGlitch() {
        $('#glitch').text('miTitulo');
    }
    theGlitch();

    WebFont.load({
        google: {
            families: ['Source Serif Pro', 'Source Sans Pro', 'Source Code Pro']
        }
    });
    //$(".cuentos .glitch").lettering();

    (function () {
        var webappCache = window.applicationCache;
        function loaded() {
            switch (webappCache.status) {
                case 0:
                    console.log("Cache status: Uncached");
                    break;
                case 1:
                    console.log("Cache status: Idle");
                    break;
                case 2:
                    console.log("Cache status: Checking");
                    break;
                case 3:
                    console.log("Cache status: Downloading");
                    break;
                case 4:
                    console.log("Cache status: Updateready");
                    break;
                case 5:
                    console.log("Cache status: Obsolete");
                    break;
            }
        }
        function updateCache() {
            webappCache.swapCache();
            console.log("Cache has been updated due to a change found in the manifest");
        }
        function errorCache() {
            console.log("You're either offline or something has gone horribly wrong.");
        }
        window.addEventListener("load", loaded, false);
        webappCache.addEventListener("updateready", updateCache, false);
        webappCache.addEventListener("error", errorCache, false);
    })();
    function onUpdateReady() {
        window.location.reload();
    }
    window.applicationCache.addEventListener('updateready', onUpdateReady);
    if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
        onUpdateReady();
    }
});