$(document).ready(function() {
    
    $(document).on("mouseover", "button", function() {
      var text = $(this).text();
      responsiveVoice.speak(text);
    });
  });