$('[data-target-terms]').on('click', function () {
  $('.tos-nav-list > li').removeClass('active');
  $('[data-target-terms]').addClass('active');
  $('html, body').animate({
    scrollTop: $("#terms").offset().top
  }, 1000);
});

$('[data-target-materials]').on('click', function () {
  $('.tos-nav-list > li').removeClass('active');
  $('[data-target-materials]').addClass('active');
  $('html, body').animate({
    scrollTop: $("#materials").offset().top
  }, 1000);
});

$('[data-target-analytics]').on('click', function () {
  $('.tos-nav-list > li').removeClass('active');
  $('[data-target-analytics]').addClass('active');
  $('html, body').animate({
    scrollTop: $("#analytics").offset().top
  }, 1000);
});

$('[data-target-cookies]').on('click', function () {
  $('.tos-nav-list > li').removeClass('active');
  $('[data-target-cookies]').addClass('active');
  $('html, body').animate({
    scrollTop: $("#cookies").offset().top
  }, 1000);
});

$("#tosNav").stick_in_parent({ offset_top: 100 });
