$(document).ready(function() {

  $(window).scroll(function() {
    if ($('body').scrollTop() > 200) {
      $('.navbar-brand').removeClass('hidden');
      $('.navbar-inverse').css('background-color', '#fff');
    } else {
      $('.navbar-brand').addClass('hidden');
      $('.navbar-inverse').css('background-color', 'transparent');
    }
  });


});