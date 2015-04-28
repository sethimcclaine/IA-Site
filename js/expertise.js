$(window).ready(function() {
    new dynamicBG('under-layer', 15, '#BF5FFF');
    $('footer').hide();
    $(window).scroll(function() {
        if (window.scrollY > 1024) {
            $('.our-buisness').hide()
            $('.e-book').show();
            $('footer').show();
        } else {
            $('.our-buisness').show()
            $('.e-book').hide();
            $('footer').hide();
        }
    });

});
