$(function(){
    //resize event
    if(locationFil == 'mHosting' || locationFil == 'mMain')
        writeSpan();
    $(window).resize(function(event){
        closeMyMenu();
        if($('.lowWidth992').css('display') != 'none')
            $('#regiFromBox').hide();
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
    $('#leavePwdBtn').click(function(){
        $('#pwdConfirmForm').hide();
        $('#leaveForm').show();
    });

    $('#registrationBox').click(function(){
        window.open("../../festival/fRegiFestival.html");
    });

    $('.btnC').click(function(){
        $('#regiFromBox').hide();
    });
    
    pastFestivalCheck($('.pastFestival'));
    pastFestivalCheck($('.ingFestival'));
    pastFestivalCheck($('.preFestival'));
    pastFestivalCheck($('.permittedFestival'));
    pastFestivalCheck($('.standbyFestival'));
    pastFestivalCheck($('.returnedFestival'));
    // 토글버튼 클릭 이벤트
    $('.preFestival').click(function(){
        pastFestivalCheck($(this));
    });
    $('.ingFestival').click(function(){
        pastFestivalCheck($(this));
    });
    $('.pastFestival').click(function(){
        pastFestivalCheck($(this));
    });
    $('.permittedFestival').click(function(){
        pastFestivalCheck($(this));
    });
    $('.standbyFestival').click(function(){
        pastFestivalCheck($(this));
    });
    $('.returnedFestival').click(function(){
        pastFestivalCheck($(this));
    });

    function writeSpan(){
        $('.imageBox').each(function(){
            if ($(this).attr('class').split(' ')[1] == 'permitted')
                $(this).children('div:nth-of-type(3)').html('완료').css('background-color','rgb(0, 136, 84)');
            else if ($(this).attr('class').split(' ')[1] == 'standby')
                $(this).children('div:nth-of-type(3)').html('대기').css('background-color','rgb(150, 150, 0)');
            else if ($(this).attr('class').split(' ')[1] == 'returned')
                $(this).children('div:nth-of-type(3)').html('반려').css('background-color','rgb(172, 0, 0)');
        });
    }

    function pastFestivalCheck($var){
        if ($var.children('input').is(':checked')){
            $var.children('div').stop().animate({'left':'-1px'}, 50, function(){
                $var.children('input').prop('checked', false);
                $var.stop().removeAttr('style');
                $var.children('div').children('div').stop().removeAttr('style');
                displayImageBox();
            });
        } else {
            $var.stop().css({'background-color':'#4169e1'}, 50);
            $var.children('div').children('div').stop().css({'background-color':'#eee'}, 50);
            $var.children('div').stop().animate({'left':'21px'}, 50, function(){
                $var.children('input').prop('checked', true);
                displayImageBox();
            });
        }
    }

    function displayImageBox(){
        var index = 0;
        var checkBoxs = 0;
        if($('.pastFestival').children('input').is(':checked')){
            $('.finishedFest').parent().show();
            $('.finishedFest').parent().each(function(){
                $('.imageBoxs').children('div').eq(parseInt(index / 2) + 1).append($(this));
                index++;
            });
        } else {
            $('.finishedFest').parent().hide();
            checkBoxs++;
        }
        if($('.ingFestival').children('input').is(':checked')){
            $('.startedFest').parent().show();
            $('.startedFest').parent().each(function(){
                $('.imageBoxs').children('div').eq(parseInt(index / 2) + 1).append($(this));
                index++;
            });
        } else {
            $('.startedFest').parent().hide();
            checkBoxs++;
        }
        if($('.preFestival').children('input').is(':checked')){
            $('.preFest').parent().show();
            $('.preFest').parent().each(function(){
                $('.imageBoxs').children('div').eq(parseInt(index / 2) + 1).append($(this));
                index++;
            });
        } else {
            $('.preFest').parent().hide();
            checkBoxs++;
        }
        // if(checkBoxs == 3){
        //     $('.noResult').show();
        // } else {
        //     $('.noResult').hide();
        // }
        displayHostImageBox();
    }

    function displayHostImageBox(){
        var index = 0;
        var checkBoxs = 0;
        if(locationFil == 'mHosting' || locationFil == 'mMain'){
            if($('.permittedFestival').children('input').is(':checked')){
                $('.permitted').each(function(){
                    if($(this).css('display') != 'none'){
                        $('.imageBoxs').children('div').eq(parseInt(index / 2) + 1).append($(this));
                        index++;
                    }
                });
            } else {
                $('.permitted').hide();
                checkBoxs++;
            }
            if($('.standbyFestival').children('input').is(':checked')){
                $('.standby').each(function(){
                    if($(this).css('display') != 'none'){
                        $('.imageBoxs').children('div').eq(parseInt(index / 2) + 1).append($(this));
                        index++;
                    }
                });
            } else {
                $('.standby').hide();
                checkBoxs++;
            }
            if($('.returnedFestival').children('input').is(':checked')){
                $('.returned').each(function(){
                    if($(this).css('display') != 'none'){
                        $('.imageBoxs').children('div').eq(parseInt(index / 2) + 1).append($(this));
                        index++;
                    }
                });
            } else {
                $('.returned').hide();
                checkBoxs++;
            }
        }
        var visBoxs = $('.imageBox').filter(function() {
            return $(this).css('display') != 'none';
        }).length;
        if(visBoxs == 0)
            $('.noResult').show();
        else
            $('.noResult').hide();

        // if(checkBoxs == 3){
        //     $('.noResult').show();
        // } else {
        //     if($('.noResult').css('display') != 'none')
        //         $('.noResult').hide();
        // }
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
