$(document).ready(function() {

  // Add scroll behaviour to the nav
  $(window).scroll(function() {
    if ($('body').scrollTop() > 50) {
      $('.navbar-inverse').css('background-color', '#fff');
    } else {
      $('.navbar-inverse').css('background-color', 'transparent');
    }
  });


});