$(function(){
    checkInfoOption();
    $(window).resize(function(event){
        checkInfoOption();
        // if ($('.lowWidth992').css('display') != 'none'){
        //     $('.festivalInfo').children('input').prop('checked', false);
        //     $('.festivalInfo').stop().removeAttr('style');
        //     $('.festivalInfo').children('div').stop().removeAttr('style');
        //     $('.festivalInfo').children('div').children('div').stop().removeAttr('style');
        // }
    })
    $('.imageBox').on('mouseover', function(){
        if ($('.lowWidth992').css('display') == 'none' && !$('.festivalInfo').children('input').is(':checked')){
            $(this).stop().animate({'background-size':'720px'}, 500);
            $(this).children('div:nth-of-type(2)').stop().animate({'height':'114px'}, 200);
            $(this).children('div:nth-of-type(2)').children('div:nth-of-type(3)').stop().animate({'height':'60px'}, 200);
            writeCssStatusCircle($(this).children('div:nth-of-type(1)'), $(this).children('div:nth-of-type(1)').children('span:nth-of-type(2)').attr('class'));
        }
    });
    $('.imageBox').on('mouseleave', function(){
        if ($('.lowWidth992').css('display') == 'none' && !$('.festivalInfo').children('input').is(':checked')){
            $(this).children('div:nth-of-type(1)').children('span:nth-of-type(2)').stop().html('').removeAttr('style');
            $(this).stop().animate({'background-size':'700px'}, 100);
            $(this).children('div:nth-of-type(2)').stop().animate({'height':'54px'}, 100);
            $(this).children('div:nth-of-type(2)').children('div:nth-of-type(3)').stop().animate({'height':'0'}, 100);
            $('.imageBox > div:nth-of-type(1) > span:nth-of-type(1)').html('').stop().animate({
                'border-radius':'10px',
                'width':'20px',
                'height':'20px'
            }, 100);
        }
    });
    $('.festivalInfo').click(function(){
        if ($('.festivalInfo').children('input').is(':checked')){
            toggleBtnOff();
        } else {
            toggleBtnOn();
        }
    });

    function displayOnOption($var){
        $var.children('div:nth-of-type(2)').stop().css({'height':'114px'});
        $var.children('div:nth-of-type(2)').children('div:nth-of-type(3)').stop().css({'height':'60px'});
        writeCssStatusCircle($var.children('div:nth-of-type(1)'), $var.children('div:nth-of-type(1)').children('span:nth-of-type(2)').attr('class'));
    }

    function displayOffOPtion($var){
        $var.children('div:nth-of-type(1)').children('span:nth-of-type(2)').stop().html('').removeAttr('style');
        $var.stop().css({'background-size':'700px'});
        $var.children('div:nth-of-type(2)').stop().css({'height':'54px'});
        $var.children('div:nth-of-type(2)').children('div:nth-of-type(3)').stop().css({'height':'0'});
        $('.imageBox > div:nth-of-type(1) > span:nth-of-type(1)').html('').stop().css({
            'border-radius':'10px',
            'width':'20px',
            'height':'20px'
        });
    }
    function toggleBtnOn(){
        $('.festivalInfo').stop().css({'background-color':'#4169e1'}, 50);
        $('.festivalInfo').children('div').children('div').stop().css({'background-color':'#eee'}, 50);
        $('.festivalInfo').children('div').stop().animate({'left':'21px'}, 50, function(){
            $('.festivalInfo').children('input').prop('checked', true);
            $('.imageBox').each(function(){displayOnOption($(this));});
        });
    }
    function toggleBtnOff(){
        $('.festivalInfo').children('div').stop().animate({'left':'-1px'}, 50, function(){
            $('.festivalInfo').children('input').prop('checked', false);
            $('.imageBox').each(function(){displayOffOPtion($(this));});
            $('.festivalInfo').stop().removeAttr('style');
            $('.festivalInfo').children('div').children('div').stop().removeAttr('style');
        });
    }
    function checkInfoOption(){
        if ($('.lowWidth992').css('display') != 'none'){
            toggleBtnOn();
        }
    }

    function writeCssStatusCircle($chk, date){
        $chk.children('span:nth-of-type(1)').stop().animate({
            'border-radius':'0',
            'width':'50px'
        }, 200, function(){
            if ($chk.attr('class') == 'startedFest')
                $chk.children('span:nth-of-type(1)').html('진행중');
            else if ($chk.attr('class') == 'preFest')
                $chk.children('span:nth-of-type(1)').html('예정');
            else if ($chk.attr('class') == 'finishedFest')
                $chk.children('span:nth-of-type(1)').html('종료');
            $chk.children('span:nth-of-type(2)').stop().animate({
                'width':'100px'
            }, 300, function(){
                writeDate($chk, date);
            });
        });
    }
    function writeDate($chk, date){
        var str;
        if ($chk.attr('class') == 'startedFest')
            str = ' 까지';
        else if ($chk.attr('class') == 'preFest')
            str = ' 부터';
        else if ($chk.attr('class') == 'finishedFest')
            str = ' 까지';
        $chk.children('span:nth-of-type(2)').html(date + str);
    }
});