$('#postsCarousel').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  dots: false,
  speed: 300,
  arrows: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
});
