


$(document).ready(function(){
    $('.insights-slider__wrapper').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
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
});


$(window).load(function(){

});

$(window).resize(function(){

});