$(document).ready(function() {
   $('#checkbox').on('click', function() {
      $('html').css("overflow", function(_,val){
        return val == "hidden" ? "scroll" : "hidden";
      });
      $("html, body").animate({ scrollTop: 0 }, "slow");
      $('#Smallchat').css("visibility", function(_,val){
        return val == "hidden" ? "visible" : "hidden";
      });
   });
});
