$(function(){
    //resize event
    $(window).resize(function(event){
        closeMyMenu();
    })
    $('.myMenuOpen').click(function(){
        openMyMenu();
    });
    $('.myMenuClose').click(function(){
        closeMyMenu();
    });
    $('.curLoc > span').text(locationTxt);
    function openMyMenu(){
        var heightUl = $('#myPageMenu_m > ul > li').length * 40;
        $('#myPageMenu_m').show();
        $('#myPageMenu_m > ul').show();
        $('#myPageMenu_m > ul').stop().animate({'height': heightUl + 'px'}, 300)
    }
    function closeMyMenu(){
        $('#myPageMenu_m').removeAttr('style');
        $('#myPageMenu_m > ul').removeAttr('style');
    }
});
