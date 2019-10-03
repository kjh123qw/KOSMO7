$(function(){
    // 로그인 화면
    $('.btn-login').click(function(){
        HideAll();
        $('#loginModule').show();
    });
    $('.closeBackground').click(function(){
        HideAll();
    });

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
    $('.agrPlc > div:first-of-type').click(function(){
        CheckingBox($('.agrPlc > div:first-of-type'), $('#agreePolicy'));
    });
    $('.agrPlc > div > span').click(function(){
        CheckingBox($('.agrPlc > div:first-of-type'), $('#agreePolicy'));
    });
    $('.agrEml > div').click(function(){
        CheckingBox($('.agrEml > div:first-of-type'), $('#agreeEmail'));
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
        lableOn($(this).parent());
    });
    $('.focusFunc').on("blur", function(){
        if ($(this).val() == '')
            lableOff($(this).parent());
    });
    // input 선택 function
    function lableOn($obj){
        $obj.css('border', '1px solid #222');
        $obj.prev().css('color', '#222');
        $obj.prev().stop().animate({
            'width': '100px'
        }, 300);
    }
    function lableOff($obj){
        if ($obj.val() == ''){
            $obj.css('border', '1px solid #aaa');
            $obj.prev().css('color', '#aaa');
            $obj.prev().stop().animate({
                'width': '130px'
            }, 300);
        }
    }
});