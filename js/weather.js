$(function(){
    $(window).on('load', function(){
        $('.wrapper').css({
            'background-image' : 'url(./images/main01.jpg)'            
        });
    });

    daySlide();

    $('a.btn').click(function(e){
        e.preventDefault();
        let w = $('.search-box').css('width');
        if( w != '350px'){
            $('.search-box').css({
                opacity : 1,
                width : '350px'
            });
        } else {
            $('.search-box').css({
                opacity : 0,
                width : '0px'
            });
        }
    });

});

function daySlide(){
    $('.five-day').slick({
        centerMode : true,
        centerPadding : '20px',
        slidesToShow : 3, 
        slidesToScroll : 3, 
        arrows : false, 
        dots : false, 
        autoplay : true, 
        autoplaySpeed : 2000
    })
}