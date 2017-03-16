console.log('Cargando');

$(document).ready(function() {
  console.log("Bienvenido");
  var pathname = window.location.pathname;
  $('.navbar-nav > li > a[href="' + pathname + '"]').parent().addClass('active');

$( ".nav-item" ).hover(function() {
  $('.dropdown-toggle').dropdown();
});
  
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
/*
var feed = new Instafeed({
  clientId: '02e0b4818b424ec385636cc92137d822',
  accessToken: '179507307.ba4c844.79a1e62709614e39b166cda514ce829d',
  target: 'instafeed',
  template: '<div class="bg" style="background-image:url({{image}})"></div>',
  get: 'user',
  userId: '179507307',
  resolution: 'standard_resolution',
  inks: false,
  limit: 1,
  success: function() {
    console.log('success');
  },
  after: function() {
    console.log('after');
  },
});
feed.run();
*/

