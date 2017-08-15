console.log('Cargando');

$(document).ready(function() {
  console.log("Bienvenido");
  var pathname = window.location.pathname;
  $('.navbar-nav > li > a[href="' + pathname + '"]').parent().addClass('active');

  $( ".nav-item" ).hover(function() {
    $('.dropdown-toggle').dropdown();
  });
  


$('#scene').parallax();
$('#scene').parallax({
  clipRelativeInput: true,
  calibrateX: false,
  calibrateY: true,
  invertX: false,
  invertY: true,
  limitX: false,
  limitY: 10,
  scalarX: 2,
  scalarY: 10,
  frictionX: 0.2,
  frictionY: 0.8,
  originX: 0.0,
  originY: 1.0
});

    //Funciones

    function theGlitch() {
        $('#glitch').text('miTitulo');
    }
    theGlitch();
});

