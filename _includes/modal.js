$(function() {
  const entry = $('[data-reveal-contact]'),
        exit = $("#exitButton"),
        container = $("#contactContainer"),
        form = $("#contactForm");

  entry.click(function() {
    container.css('visibility', 'visible');
    form.css('transform', 'translate(-50%, -50%)');
    $('html, body').css('cssText', 'overflow: hidden !important');
  });

  exit.click(function() {
    container.css('visibility', 'hidden');
    form.css('transform', 'translate(-50%, -200%)');
    $('html, body').css('overflow', '');
  });
});


$(function() {

  const entry = $('[data-job-modal-trigger]'),
        exit = $("[data-job-modal-close]"),
        container = $("[data-job-modal]"),
        form = $("[data-job-modal-form]");

  entry.click(function() {
    container.css('visibility', 'visible');
    form.css('transform', 'translate(-50%, -50%)');
    $('html, body').css('cssText', 'overflow: hidden !important');
  });

  exit.click(function() {
    container.css('visibility', 'hidden');
    form.css('transform', 'translate(-50%, -200%)');
    $('html, body').css('overflow', '');
  });

});
