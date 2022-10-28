


$(document).ready(function(){
    $('.insights-slider__wrapper').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 666,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
    $('.slide-prev').click(function(e){
        //e.preventDefault();
        $('.insights-slider__wrapper').slick('slickPrev');
    } );

    $('.slide-next').click(function(e){
        //e.preventDefault();
        $('.insights-slider__wrapper').slick('slickNext');
    } );

    $('.header-burger').click((function () {
        $('#myNav').css('width', '100%')
    }));
    $('.closebtn').click((function () {
        $('#myNav').css('width', '0%')
    }));
});

$(window).load(function(){

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

$(window).resize(function(){

});