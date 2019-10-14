$(function(){
    var width =  screen.availWidth;
    var height = screen.availHeight
    // $('#container').width(width - 20);
    $('#container').height(height - 70);
    //화면 크기 고정

    $('#ulDiv li').mouseenter(function(){

        var name = $(this).attr('data-li');
        if(name == 'main'){
            return false;
        }

        $(this).addClass('pulse');
    })

    $('#ulDiv li').mouseleave(function(){
        $(this).removeClass('pulse');
    })
    //메뉴 css

})