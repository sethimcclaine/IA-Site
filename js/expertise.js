$(window).ready(function() {
    new dynamicBG('.under-layer', 15, '#BF5FFF');
    $('footer').hide();

    var topLayerTop = $('.topLayer').attr('top');


    $(window).scroll(function() {
        //var scrollY = window.scrollY;
 //       console.log(scrollY);
        //handle under layer
        if (scrollY > 736) {
            $('.our-buisness').hide()
            $('.e-book').show();
            $('footer').show();
        } else {
            $('.our-buisness').show()
            $('.e-book').hide();
            $('footer').hide();
        }
/*
        //top
        var newTop = topLayerTop - scrollY;
        $('.top-layer').attr('top', newTop);
*/
    });

});
