var container, list;
$("document").ready(function() {
  list = $('#hoverPanelsContainer');
  list.on("mouseenter", '.panel', function(element) {
    let target = element.target.dataset.target;
    $('#hoverPanelsContainer div.active').removeClass("active");
    $('#hoverPanelsContent div.active').removeClass("active");
    $(element.target).addClass('active');
    $('#hoverPanelsContent #' + target).addClass('active');
    if (target === undefined) {
      $('#hoverPanelsContent #elastic').addClass('active');
    }
  })
});
