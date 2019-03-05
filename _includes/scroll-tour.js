$('a[href^="#"]').click(function() {
  const the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop: ($(the_id).offset().top - 80)
  }, 'slow');

  return false;
});

$(document).ready(function(){
    function resizeForm(){
        var width = document.documentElement.clientWidth;
        if(width > 991){
          window.sr = ScrollReveal({ reset: false, duration: 600 });

          sr.reveal('[data-central]', {
            delay: 200,
          });

          sr.reveal('[data-bottom]', {
            origin: 'bottom',
            delay: 100,
            distance: '150px',
            easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
            rotate: {x: 65},
          });

          sr.reveal('[data-left]', {
            origin: 'left',
            delay: 150,
            distance: '150px',
            easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
            rotate: {x: 80},
          });

          sr.reveal('[data-right]', {
            origin: 'right',
            delay: 150,
            distance: '150px',
            easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
            rotate: {x: 80},
          });

          sr.reveal('[data-band-first', {
            delay: 150,
            easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
          });

          sr.reveal('[data-band-second', {
            delay: 250,
            easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
          });

          sr.reveal('[data-band-third', {
            delay: 350,
            easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
          });

          sr.reveal('[data-band-fourth', {
            delay: 450,
            easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
          });
        }
    }
    window.onresize = resizeForm;
    resizeForm();
});
