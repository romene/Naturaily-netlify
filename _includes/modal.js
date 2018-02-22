$(function() {
  $('[data-reveal-contact]').click(function() {
    $('#contactContainer').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactContainer");
    var form = $("#contactForm");

    if (!form.is(e.target)
        && form.has(e.target).length === 0)
    {
        container.fadeOut();
    }
  });
});
