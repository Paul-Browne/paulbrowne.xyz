(function() {
    function _resize(a, b) {
        return window.addEventListener("resize", function() {
            clearTimeout(b),
                b = setTimeout(a, 150)
        }), a
    }

    function _resize_w(a, b) {
        var c = [window.innerWidth];
        return window.addEventListener("resize", function() {
            var e = c.length;
            c.push(window.innerWidth);
            if (c[e] !== c[e - 1]) {
                clearTimeout(b);
                b = setTimeout(a, 150);
            }
        }), a
    }

    function _mousemove(a, b) {
        return window.addEventListener("mousemove", function() {
            clearTimeout(b);
            b = setTimeout(a, 200);
        }), a;
    }

    function _scroll(a, b) {
        return window.addEventListener("scroll", function() {
            clearTimeout(b);
            b = setTimeout(a, 200);
        }), a;
    }

    var norm_resize = document.getElementById('norm_resize');
    var norm_mousemove = document.getElementById('norm_mousemove');
    var norm_scroll = document.getElementById('norm_scroll');

    var deb_resize = document.getElementById('deb_resize');
    var deb_resize_w = document.getElementById('deb_resize_w');
    var deb_mousemove = document.getElementById('deb_mousemove');
    var deb_scroll = document.getElementById('deb_scroll');

    window.addEventListener('resize', function() {
        norm_resize.innerHTML++;
    })
    window.addEventListener('mousemove', function() {
        norm_mousemove.innerHTML++;
    })
    window.addEventListener('scroll', function() {
        norm_scroll.innerHTML++;
    })

    _resize(function() {
        deb_resize.innerHTML++;
    })
    _resize_w(function() {
        deb_resize_w.innerHTML++;
    })
    _mousemove(function() {
        deb_mousemove.innerHTML++;
    })
    _scroll(function() {
        deb_scroll.innerHTML++;
    })

})();