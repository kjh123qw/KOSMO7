$(function(){
    //resize event
    $('.pastFestival').show();
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
    $('#confirmBtn').click(function(){
        $('#pwdConfirmForm').hide();
        $('#infoModifyForm').show();
    });
    $('#leaveConfirmBtn').click(function(){
        $('#pwdConfirmForm').hide();
        $('#leaveForm').show();
    });


    // 검색 시스템에서 div 정렬후 새로 집어넣는 기능 작성!
    $('.pastFestival').click(function(){
        if ($('.pastFestival').children('input').is(':checked')){
            $(this).children('div').stop().animate({'left':'-1px'}, 50, function(){
                $('.pastFestival').children('input').prop('checked', false);
                $('.imageBox').each(function(){displayOnPF($(this));});
                $('.pastFestival').stop().removeAttr('style');
                $('.pastFestival').children('div').children('div').stop().removeAttr('style');
                $('.pastFestival').show();
            });
        } else {
            $(this).stop().css({'background-color':'#4169e1'}, 50);
            $(this).children('div').children('div').stop().css({'background-color':'#eee'}, 50);
            $(this).children('div').stop().animate({'left':'21px'}, 50, function(){
                $('.pastFestival').children('input').prop('checked', true);
                $('.imageBox').each(function(){displayOffPF($(this));});
            });
        }
    });
    function displayOnPF($var){
        childClass = $var.children('div:first-of-type').attr('class');
        if (childClass == 'finishedFest')
            $var.show();
    }
    function displayOffPF($var){
        childClass = $var.children('div:first-of-type').attr('class');
        if (childClass == 'finishedFest')
            $var.hide();
    }
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
    function CheckingBox($trg, $input){
        if ($input.is(':checked')){
            $trg.css({
                'background-color': 'white'
            }).html('');
            $input.prop('checked', false);
        }else{
            $trg.css({
                'background-color': 'black',
                'color': 'white',
                'font-size': '20px',
                'text-align': 'center',
                'line-height': '20px'
            }).html('<i class="fas fa-check"></i>');
            $input.prop('checked', true);
        }
    }
});
