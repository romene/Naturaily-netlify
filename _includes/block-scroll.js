$(document).ready(function() {
   $('#checkbox').on('click', function() {
      $('html, body').css("overflow", function(_,val){
        return val == "hidden" ? "visible" : "hidden";
      });
      $('html, body').css("position", function(_,val){
        return val == "relative" ? "static" : "relative";
      });
      $('html, body').css("height", function(_,val){
        return val == "100%" ? "auto" : "100%";
      });
      $('#Smallchat, #scrollUp').css("visibility", function(_,val){
        return val == "hidden" ? "visible" : "hidden";
      });
   });
});
