$.fn.make_carousel = function() {
    var speed = 0;
    var scroll = 0;
    var container = $(this);
    var container_w = container.width();
    var max_scroll = container[0].scrollWidth - container.outerWidth();
    var prev_frame = new Date().getTime();
    container.on('mousemove', function(e) {
        var mouse_x = e.pageX - container.offset().left;
        var mouseperc = 100 * mouse_x / container_w;
        speed = mouseperc - 50;
    }).on ( 'mouseleave', function() {
        speed = 0;
    });

    function updatescroll() {
        var cur_frame = new Date().getTime();
        var time_elapsed = cur_frame - prev_frame;
        prev_frame = cur_frame;
        if (speed !== 0) {
            scroll += speed * time_elapsed / 50;
            if (scroll < 0) scroll = 0;
            if (scroll > max_scroll) scroll = max_scroll;
            container.scrollLeft(scroll);
        }
        window.requestAnimationFrame(updatescroll);
    }
    window.requestAnimationFrame(updatescroll);
}
$("#hooverScroll").make_carousel();
