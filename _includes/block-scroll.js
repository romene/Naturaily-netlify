var didScroll,
    lastScrollTop = 0,
    delta = 5,
    navbarHeight = $('#checkbox, #mobileSpan').outerHeight();

$('#checkbox').on('click', function() {

  $('#Smallchat').css("visibility", function(_,val){
    return val == "hidden" ? "visible" : "hidden";
  });

  if ($('.menu').hasClass('active')) {

    $(".menu").removeClass('active');

  } else {

    $(".menu").addClass('active');

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
    $("#mobileSpan").removeClass('open');
  } else {
    if(st + $(window).height() < $(document).height()) {
      $('#checkbox, #mobileSpan').removeClass('nav-up').addClass('nav-down');
      $(".menu").removeClass('active');
      $("#mobileSpan").removeClass('open');
    }
  }

  lastScrollTop = st;
}
