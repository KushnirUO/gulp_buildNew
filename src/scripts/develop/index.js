


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

$(window).resize(function(){

});