$(function() {
  const container = $('#contactContainer'),
        entry = $('[data-reveal-contact]'),
        exit = $("#exitButton");

  entry.click(function() {
    $('#contactContainer').css('visibility', 'visible');
  });

  exit.click(function() {
    $('#contactContainer').css('visibility', 'hidden');
  });
});
