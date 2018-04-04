$(function() {
  const entry = $('[data-reveal-contact]'),
        exit = $("#exitButton"),
        container = $("#contactContainer");

  entry.click(function() {
    container.css('visibility', 'visible');
    $('html, body').css('overflow', 'hidden');
  });

  exit.click(function() {
    container.css('visibility', 'hidden');
    $('html, body').css('overflow', 'visible');
  });
});
