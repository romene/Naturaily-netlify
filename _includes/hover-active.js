var container, list;
$("document").ready(function() {
  list = $('#hoverPanelsContainer');
  list.on("mouseenter", '.panel', function(element) {
    let cont = element.target.dataset.target;
    $('#hoverPanelsContainer div.active').removeClass("active");
    $('#hoverPanelsContent div.active').removeClass("active");
    $(element.target).addClass('active');
    $('#hoverPanelsContent #' + cont).addClass('active');
    if (cont === undefined) {
      $('#hoverPanelsContent #elastic').addClass('active');
    }
  })
});
