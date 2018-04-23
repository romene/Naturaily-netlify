var didScroll,
    lastScrollTop = 0,
    delta = 5,
    navbarHeight = $('#checkbox, #mobileSpan').outerHeight();

$('#checkbox').on('click', function() {

  if ($('.menu').hasClass('active')) {

    $(".menu").removeClass('active');
    $('#Smallchat').css("visibility", "visible");

  } else {

    $(".menu").addClass('active');
    $('#Smallchat').css("visibility", "hidden");

  }
});

$('#mobileSpan').click(function(){
	$(this).toggleClass('open');
  $('#checkbox').click();
});

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  if(Math.abs(lastScrollTop - st) <= delta)
  return;

  if (st > lastScrollTop && st > navbarHeight){
    $('#checkbox, #mobileSpan').removeClass('nav-down').addClass('nav-up');
    $(".menu").removeClass('active');
    $('#Smallchat').css("visibility", "visible");
    $("#mobileSpan").removeClass('open');
  } else {
    if(st + $(window).height() < $(document).height()) {
      $('#checkbox, #mobileSpan').removeClass('nav-up').addClass('nav-down');
      $(".menu").removeClass('active');
      $('#Smallchat').css("visibility", "visible");
      $("#mobileSpan").removeClass('open');
    }
  }

  lastScrollTop = st;
}
