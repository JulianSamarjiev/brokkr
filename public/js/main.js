$(document).ready(function() {

  // Add scroll behaviour to the nav
  $(window).scroll(function() {
    if ($('body').scrollTop() > 50) {
      $('.navbar-inverse').css('background-color', '#fff');
    } else {
      $('.navbar-inverse').css('background-color', 'rgba(255,255,255,0.6)');
    }
  });

  // Careers page
  if (window.location.href.indexOf("careers.html") - 1) {
    // Toggle job positions
    $(".job-position p").hide();
    $(".job-position h3").click(function() {
      $(this).siblings("p").slideToggle();
    });
  }

  // Projects page
  if (window.location.href.indexOf("projects.html") - 1) {
    // Initialize gallery
    $('#aniimated-thumbnials').lightGallery({
      thumbnail : true
    });
    // Disable carousel on smaller viewports
    if ($(window).width() < 767) {
      $('.carousel-control').hide();
      $('.carousel').carousel({
        interval: false
      })
    }
  }
});

$(function() {
  // Get the form.
  var form = $('#ajax-contact');

  // Get the messages div.
  var formMessages = $('#form-messages');

  // Set up an event listener for the contact form.
  $(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // Serialize the form data.
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val()
    };
    // Submit the form using AJAX.
    $.ajax({
      method: 'POST',
      url: $(form).attr('action'),
      data: formData
    })
    .done(function(response) {
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      // Set the message text.
      $(formMessages).text(response);

      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    })
    .fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      // Set the message text.
      if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
      } else {
          $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }
    });
  });
});