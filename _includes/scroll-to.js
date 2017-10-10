var container, list, scrollTpo;
$("document").ready(function() {
  container = $('.scrollTo-container');
  list = $('.scrollTo-list');
  list.on("click", 'li', function(element) {
    let scrollTo = $(element.target.dataset.target);
    container.animate({
      scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
    });
  })
});
