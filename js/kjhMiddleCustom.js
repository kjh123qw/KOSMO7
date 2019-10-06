$(function(){
    $('.imageBox').on('mouseover', function(){
        $(this).stop().animate({'background-size':'720px'}, 500);
    });
    $('.imageBox').on('mouseleave', function(){
        $(this).stop().animate({'background-size':'700px'}, 100);
    });
});