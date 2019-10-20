$(function(){
    // 로그인 화면
    $('.btn-login').click(function(){
        HideAll();
        $('#loginModule').show();
    });
    $('.closeBackground').click(function(){
        HideAll();
    });
    $('.agrPlc').attr('class', 'agrPlc cstChkBox');
    $('.agrEml').attr('class', 'agrEml cstChkBox');
    // 회원가입 화면
    $('.btn-join').click(function(){
        HideAll();
        $('#joinModule').show();
    });
    $('.btn-idFind').click(function(){
        HideAll();
        $('#idFindModule').show()
    });
    $('.btn-pwFind').click(function(){
        HideAll();
        $('#pwFindModule').show()
    });
    $('.closeLayer').click(function(){
        HideAll();
    });
    $('.chkRmbId').click(function(){
        CheckingBox($('.rmbIdChkBox > div:first-of-type'), $('#logRmbId'));
    });
    // $('.agrPlc > div:first-of-type').click(function(){
    //     CheckingBox($('.agrPlc > div:first-of-type'), $('#agreePolicy'));
    // });
    // $('.agrPlc > div > span').click(function(){
    //     CheckingBox($('.agrPlc > div:first-of-type'), $('#agreePolicy'));
    // });
    $('.cstChkBox').click(function(){
        CheckingBox($(this).children('div:first-of-type'), $(this).children('input'));
    });

    function HideAll(){
        $('#loginModule').hide();
        $('#joinModule').hide();
        $('#idFindModule').hide()
        $('#pwFindModule').hide()
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

    // input 선택 시 처리
    $('.focusFunc').on("focus", function(){
        OptionOpen($(this).parent());
    });
    $('.focusFunc').on("blur", function(){
        if ($(this).val() == '')
        OptionClose($(this).parent());
    });
    // input 선택 function
    function OptionOpen($clTrg){
        $clTrg.prev().children('span:nth-of-type(1)').css('border-bottom','1px solid #000');
        $clTrg.prev().children('span:nth-of-type(2)').css('border-bottom','1px solid #000');
        $clTrg.prev().children('span:nth-of-type(3)').css('color','#000');
        $clTrg.css({'border-bottom':'1px solid #000', 'border-left':'1px solid #000', 'border-right':'1px solid #000'});
        $clTrg.children('span').css('color','#000');
        $clTrg.prev().children('span:nth-of-type(1)').animate({'width':'34%'}, 100);
        $clTrg.prev().children('span:nth-of-type(2)').animate({'width':'34%'}, 100);
        $clTrg.prev().children('span:nth-of-type(3)').animate({'top':'9px'}, 100);
    }
    function OptionClose($clTrg){
        $clTrg.prev().children('span:nth-of-type(1)').removeAttr('style');
        $clTrg.prev().children('span:nth-of-type(2)').removeAttr('style');
        $clTrg.prev().children('span:nth-of-type(3)').removeAttr('style');
        $clTrg.children('span:first-of-type').removeAttr('style');
        $clTrg.removeAttr('style');
    }
});