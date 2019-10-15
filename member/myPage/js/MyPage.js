$(function(){
    //resize event
    var $festivalList = $('.imageBox');
    // console.log($festivalList[1]);
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


    pastFestivalCheck($('.pastFestival'));
    pastFestivalCheck($('.ingFestival'));
    pastFestivalCheck($('.preFestival'));
    // 검색 시스템에서 div 정렬후 새로 집어넣는 기능 작성!
    $('.preFestival').click(function(){
        pastFestivalCheck($(this));
        displayOffPF('preFest');
    });
    $('.ingFestival').click(function(){
        pastFestivalCheck($(this));
        displayOffPF('startedFest');
    });
    $('.pastFestival').click(function(){
        pastFestivalCheck($(this));
        displayOffPF('finishedFest');
    });
    function pastFestivalCheck($var){
        if ($var.children('input').is(':checked')){
            $var.children('div').stop().animate({'left':'-1px'}, 50, function(){
                $var.children('input').prop('checked', false);
                $var.stop().removeAttr('style');
                $var.children('div').children('div').stop().removeAttr('style');
                // $var.show();
            });
        } else {
            $var.stop().css({'background-color':'#4169e1'}, 50);
            $var.children('div').children('div').stop().css({'background-color':'#eee'}, 50);
            $var.children('div').stop().animate({'left':'21px'}, 50, function(){
                $var.children('input').prop('checked', true);
                displayOnPF();
            });
        }
    }
    function displayOnPF(){
        var index = 0;
        $festivalList.each(function(){
            $(this).show();
            $('#imageBoxs').children('div').eq(parseInt(index / 2) + 1).append($(this));
            index++;
        });
    }
    function displayOffPF(str){
        var childClass = '';
        var index = 0;
        $festivalList.each(function(){
            childClass = $(this).children('div:first-of-type').attr('class');
            if (childClass == str || $(this).css('display') == 'none') {
                $(this).hide();
            } else {
                $('#imageBoxs').children('div').eq(parseInt(index / 2) + 1).append($(this));
                index++;
            }
        });
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
