$(function(){
    // 로그인 화면
    $('.btn-login').click(function(){
        $('#joinModule').hide();
        $('#loginModule').show();
    });
    $('.loginBackground').click(function(){
        $('#loginModule').hide();
    });

    // 회원가입 화면
    $('.btn-join').click(function(){
        $('#loginModule').hide();
        $('#joinModule').show();
    });
    $('.joinBackground').click(function(){
        $('#joinModule').hide();
    });
    $('.rmbIdChkBox > div').click(function(){
        CheckingRmbID($('.rmbIdChkBox > div:first-of-type'), $('#logRmbId'));
    });
    $('.agrPlc > div:first-of-type').click(function(){
        CheckingRmbID($('.agrPlc > div:first-of-type'), $('#agreePolicy'));
    });
    $('.agrPlc > div > span').click(function(){
        CheckingRmbID($('.agrPlc > div:first-of-type'), $('#agreePolicy'));
    });
    $('.agrEml > div').click(function(){
        CheckingRmbID($('.agrEml > div:first-of-type'), $('#agreeEmail'));
    });
    function CheckingRmbID($trg, $input){
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
    $('.focusFunc').on("focus", function(event){
        lableOn($(event.target).parent());
    });
    $('.focusFunc').on("blur", function(event){
        lableOff($(event.target).parent());
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