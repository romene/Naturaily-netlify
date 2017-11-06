var container, list;
$("document").ready(function() {
  list = $('#hoverPanels-container');
  list.on("mouseenter", '.panel', function(element) {
    let cont = element.target.dataset.target;
    $('#hoverPanels-container div.active').removeClass("active");
    $('#hoverPanels-content div.active').removeClass("active");
    $(element.target).addClass('active');
    $('#hoverPanels-content #' + cont).addClass('active');
    if (cont === undefined) {
      $('#hoverPanels-content #elastic').addClass('active');
    }
  })
});
