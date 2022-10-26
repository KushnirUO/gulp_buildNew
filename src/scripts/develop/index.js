$(document).ready(function () {

});

$(window).load(function () {

});
$(window).scroll(function () {
    var $height = $(window).scrollTop();
    console.log($height);
    if ($height > 900 && $height < 1200) {
        $('.mobile-dev__img1').css('top', $height - 900);
        $('.mobile-dev__img1').css('display','flex');
        $('.mobile-dev__img2').css('display','none');

    }
    if ($height > 1200 && $height < 1500) {
        $('.mobile-dev__img1').css('display','none');
        $('.mobile-dev__img2').css('display','flex');
        $('.mobile-dev__img2').css('top', $height - 900);
        $('.mobile-dev__img3').css('display','none');

    }
    if ($height > 1500 && $height < 1800) {
        $('.mobile-dev__img2').css('display','none');
        $('.mobile-dev__img3').css('display','flex');
        $('.mobile-dev__img3').css('top', $height - 900);
        $('.mobile-dev__img4').css('display','none');

    }
    if ($height > 1800 && $height < 2100) {
        $('.mobile-dev__img3').css('display','none');
        $('.mobile-dev__img4').css('display','flex');
        $('.mobile-dev__img4').css('top', $height - 900);
    }

    }
);

    $(window).resize(function () {

    });