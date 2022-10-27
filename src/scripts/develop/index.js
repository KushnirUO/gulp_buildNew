$(document).ready(function () {

});

$(window).load(function () {

});
$(window).scroll(function () {
    var $height = $(window).scrollTop();
    console.log($height);
    // $('.mobile-dev__img1 img').css('top', $height+200);
    // $('.mobile-dev__img2 img').css('top', $height+200);
    // $('.mobile-dev__img3 img').css('top', $height+200);
    // $('.mobile-dev__img4 img').css('top', $height+200);

    if ($height > 1000 && $height < 1300) {
        $('.mobile-dev__img1').fadeIn(0);
        $('.mobile-dev__img2').fadeOut(0);
        $('.mobile-dev__img1').css('top', 200);
    }
    if ($height > 1300 && $height < 1900) {
        $('.mobile-dev__img2').css('top', 200);
        $('.mobile-dev__img1').fadeOut(0);
        $('.mobile-dev__img2').fadeIn(0);
        $('.mobile-dev__img3').fadeOut(0);
    }
    if ($height > 1900 && $height < 2400) {
        $('.mobile-dev__img3').css('top', 200);
        $('.mobile-dev__img2').fadeOut(0);
        $('.mobile-dev__img3').fadeIn(0);
        $('.mobile-dev__img4').fadeOut(0);
    }
    if ($height > 2400 && $height < 3000) {
        $('.mobile-dev__img4').css('top', 200);
        $('.mobile-dev__img3').fadeOut(0);
        $('.mobile-dev__img4').fadeIn(0);
    }

    }
);

    $(window).resize(function () {

    });