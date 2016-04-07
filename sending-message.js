// JavaScript File
/*global $*/
$(function () {
  $('#btn-send').click(function() {
    
    $.ajax({
        url: "https://formspree.io/elis.orlova@gmail.com",  
        method: "POST",
        data: {
               name: name.value,
               email: email.value,
               message: msg.value
               },
        dataType: "json"
    }).done(function() {
       $('#container').html('<h1>Thank you!</h1>')
    });
  });
});
