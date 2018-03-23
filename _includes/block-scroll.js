$(document).ready(function() {
   $('#checkbox').on('click', function() {
      /*$('html, body').css("overflow", function(_,val){
        return val == "hidden" ? "visible" : "hidden";
      });
      $('html, body').css("position", function(_,val){
        return val == "relative" ? "static" : "relative";
      });
      $('html, body').css("height", function(_,val){
        return val == "100%" ? "auto" : "100%";
      });*/
      $("html, body").animate({ scrollTop: 0 }, "slow");
      $('#Smallchat, #scrollUp').css("visibility", function(_,val){
        return val == "hidden" ? "visible" : "hidden";
      });
   });
});



function tak() {
  console.log("włączona, nie będziesz scrollował");
  window.addEventListener("scroll", preventMotion, false);
  window.addEventListener("touchmove", preventMotion, false);
}

function nie() {
  console.log("wyłączona, możesz scrollować");
  window.removeEventListener("scroll", preventMotion, false);
  window.removeEventListener("touchmove", preventMotion, false);
}

function preventMotion(event) {
  console.log("blokuje Ci scrolla :P");
  window.scrollTo(0, 0);
  event.preventDefault();
  event.stopPropagation();
}
