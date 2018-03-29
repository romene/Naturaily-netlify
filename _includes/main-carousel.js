$('#maincarousel').slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  dots: true,
  speed: 300
});

$('#post1').on('click', function() {
  if ($(window).width() < 370) {

    $('.slick-list').css("height", function(_,val){
      return val == "570px" ? "420px" : "570px";
    });

  } else if ($(window).width() < 409) {

    $('.slick-list').css("height", function(_,val){
      return val == "480px" ? "380px" : "480px";
    });

  } else {

    $('.slick-list').css("height", function(_,val){
      return val == "420px" ? "340px" : "420px";
    });

  }
});
