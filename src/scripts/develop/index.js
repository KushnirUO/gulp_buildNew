


$(document).ready(function(){

    $(function (){
        jQuery.validator.addMethod("emailfull", function(value, element) {
            return this.optional(element) || /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(value);
        }, "Please enter valid email address!");
        jQuery.validator.addMethod("latinOnly", function (value, element) {
            return this.optional(element) || /^[a-z\.\s]+$/i.test(value);
        }, "Only latin letters.");

        $('#subscribe-form').validate(
            {
                rules:{
                    name:{
                        latinOnly:true
                    },

                    email:{
                        required: true,
                        emailfull: true,
                        minlength:3
                    }
                },
                messages:{
                    email:'Enter correct Email'
                },
            }
        )
    })
    $(function (){
        jQuery.validator.addMethod("emailfull", function(value, element) {
            return this.optional(element) || /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(value);
        }, "Please enter valid email address!");

        $('#subscribe-form1').validate(
            {
                rules:{
                    email:{
                        required: true,
                        emailfull: true,
                        minlength:3
                    }
                },
                messages:{
                    email:'Enter correct Email'
                },
            }
        )
    })
    $('.insights-slider__wrapper').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.slide-prev'),
        nextArrow: $('.slide-next'),
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
    // $('.slide-prev').click(function(e){
    //     //e.preventDefault();
    //     $('.insights-slider__wrapper').slick('slickPrev');
    // } );
    //
    // $('.slide-next').click(function(e){
    //     //e.preventDefault();
    //     $('.insights-slider__wrapper').slick('slickNext');
    // } );

    $('.header-burger').click((function () {
        $('#myNav').css('width', '100%')
    }));
    $('.closebtn').click((function () {
        $('#myNav').css('width', '0%')
    }));
});

// $(window).load(function(){
//
// });
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