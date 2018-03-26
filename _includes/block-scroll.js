$(document).ready(function() {
   $('#checkbox').on('click', function() {
      $('#Smallchat').css("visibility", function(_,val){
        return val == "hidden" ? "visible" : "hidden";
      });
      /*var $document = $(document);
      $document.scroll(function() {
        if ($document.scrollTop() >= 5) {
          // user scrolled 50 pixels or more;
          // do stuff
          console.log("taktkatkak");
          $("#checkbox").click();
        }});
*/
   });
});

var didScroll,
    lastScrollTop = 0,
    delta = 5,
    navbarHeight = $('#checkbox, [data-reveal-header]').outerHeight();

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
    $('#checkbox, [data-reveal-header]').removeClass('nav-down').addClass('nav-up');
  } else {
    if(st + $(window).height() < $(document).height()) {
      $('#checkbox, [data-reveal-header]').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}
