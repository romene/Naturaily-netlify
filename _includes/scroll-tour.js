$(document).ready(function(){
  var width = document.documentElement.clientWidth;

  function scrollToElement() {
    if (width < 811) {
      $('a[href^="#"]').click(function() {
        const the_id = $(this).attr("href");

        $('html, body').animate({
          scrollTop: ($(the_id).offset().top - 40)
        }, 0);

        return false;
      });

    } else {
      const $secondSection = $('#videos');
      const $thirdSection = $('#rhythm');
      const $fourthSection = $('#hits');
      const $fifthSection = $('#cooperation');
      const $sixthSection = $('#band');
      const $sevenSection = $('#dates');
      const $eighthSection = $('#photos');
      const $firstNavOption = $('.tour-top-bar li:nth-child(2) a');
      const $secondNavOption = $('.tour-top-bar li:nth-child(3) a');
      const $thirdNavOption = $('.tour-top-bar li:nth-child(4) a');
      const $fourthNavOption = $('.tour-top-bar li:nth-child(5) a');
      const $fifthNavOption = $('.tour-top-bar li:nth-child(6) a');
      const $sixthNavOption = $('.tour-top-bar li:nth-child(7) a');
      const $sevenNavOption = $('.tour-top-bar li:nth-child(8) a');
      const $eighthNavOption = $('.tour-top-bar li:nth-child(9) a');

      checkCurrentSection();
      $(document).on('scroll', checkCurrentSection);

      $('a[href^="#"]').on('click', function () {
        const the_id = $(this).attr("href");

        $('a').each(function () {
          $(this).removeClass('active');
        })
        $(this).addClass('active');

        if (the_id !== '#banner') {
          $('html, body').animate({
            scrollTop: ($(the_id).offset().top - 130)
          }, 'slow');
        } else {
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
        }
      });

      function checkCurrentSection() {
        const $scrollPosition = $(window).scrollTop();

        if ($(this).scrollTop() == 0) {
          $('.tour-menu').removeClass('fixed');
        } else {
          $('.tour-menu').addClass('fixed');
        }

        if ($scrollPosition < $secondSection.offset().top - 150) {
          removeActiveClasses();
          $firstNavOption.addClass('active');
        } else if ($scrollPosition < $thirdSection.offset().top - 150) {
          removeActiveClasses();
          $secondNavOption.addClass('active');
        } else if ($scrollPosition < $fourthSection.offset().top - 150) {
          removeActiveClasses();
          $thirdNavOption.addClass('active');
        } else if ($scrollPosition < $fifthSection.offset().top - 200) {
          removeActiveClasses();
          $fourthNavOption.addClass('active');
        } else if ($scrollPosition < $sixthSection.offset().top - 150) {
          removeActiveClasses();
          $fifthNavOption.addClass('active');
        } else if ($scrollPosition < $sevenSection.offset().top - 150) {
          removeActiveClasses();
          $sixthNavOption.addClass('active');
        } else if ($scrollPosition < $eighthSection.offset().top - 150) {
          removeActiveClasses();
          $sevenNavOption.addClass('active');
        } else {
          removeActiveClasses();
          $eighthNavOption.addClass('active');
        }
      }

      function removeActiveClasses() {
        $('.tour-top-bar a').each(function () {
          $(this).removeClass("active");
        });
      }
    }
  }

  function resizeForm() {
    if (width > 991) {
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

  resizeForm();
  scrollToElement();

  window.onresize = function() {
    width = document.documentElement.clientWidth;
    $('a[href^="#"]').off('click');
    $('a[href^="#"]').off('scroll');
    resizeForm();
    scrollToElement();
  }
});
