$('[data-target-terms]').on('click', function () {
  $('.tos-nav-list > li').removeClass('active');
  $('[data-target-terms]').addClass('active');
  $('html, body').animate({
    scrollTop: $("#terms").offset().top
  }, 1000);
});

$('[data-target-materials]').on('click', function () {
  $('.tos-nav-list > li').removeClass('active');
  $('[data-target-materials]').addClass('active');
  $('html, body').animate({
    scrollTop: $("#materials").offset().top
  }, 1000);
});

$('[data-target-analytics]').on('click', function () {
  $('.tos-nav-list > li').removeClass('active');
  $('[data-target-analytics]').addClass('active');
  $('html, body').animate({
    scrollTop: $("#analytics").offset().top
  }, 1000);
});

$('[data-target-cookies]').on('click', function () {
  $('.tos-nav-list > li').removeClass('active');
  $('[data-target-cookies]').addClass('active');
  $('html, body').animate({
    scrollTop: $("#cookies").offset().top
  }, 1000);
});

$("#tosNav").stick_in_parent({ offset_top: 100 });

//------------------------------------------------------------------------------
/*
// Cache selectors
var lastId,
    topMenu = $("#tos-nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 1000);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
});
*/
