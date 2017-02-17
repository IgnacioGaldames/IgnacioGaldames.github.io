console.log('Cargando');

$(document).ready(function() {
  console.log("Bienvenido");
  var pathname = window.location.pathname;
  $('.navbar-nav > li > a[href="' + pathname + '"]').parent().addClass('active');
});
