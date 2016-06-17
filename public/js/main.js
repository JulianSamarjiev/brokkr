$(document).ready(function() {

  // Add scroll behaviour to the nav
  $(window).scroll(function() {
    if ($('body').scrollTop() > 50) {
      $('.navbar-inverse').css('background-color', '#fff');
    } else {
      $('.navbar-inverse').css('background-color', 'rgba(255,255,255,0.6)');
    }
  });

});

$('.carousel').carousel({
  interval: false
})

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
    debugger;
    $.ajax({
      type: 'POST',
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