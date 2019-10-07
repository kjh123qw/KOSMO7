$(function(){
    
    //resize event
    $(window).resize(function(event){
        CloseMenu();
    })

    $('#menuBtn').click(function(){
        if ($('#menuBtn').children('svg').attr('data-icon') == 'bars') {
            OpenMenu();
            $('.mainTextBox').hide();
        }
        else if ($('#menuBtn').children('svg').attr('data-icon') == 'times') {
            CloseMenu();
        }
    });

    //Menu Toggle
    function OpenMenu(){
        var height = $('.header_gnb_m').children('li').length;
        console.log(height);
        $('#navigation_m').show();
        $('#menuBtn').children('svg').attr('data-icon', 'times');
        $('.header_top').css({'background-color': '#444'});
        if ($('.arrowUpDwon').css('display') != 'none'){
            $('.header_wrap_m').css({'height': '260px'});
        }
        $('#menuBtn').css('color','#eee');
    }

    function CloseMenu(){
        $('#navigation_m').hide();
        $('#menuBtn').children('svg').attr('data-icon', 'bars');
        $('#menuBtn').css('color','#111');
        $('.header_top').removeAttr('style');
        $('.header_wrap_m').removeAttr('style');
        $('.mainTextBox').show();
    }
})