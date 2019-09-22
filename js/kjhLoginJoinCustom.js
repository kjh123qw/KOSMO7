$(function(){
    // 로그인 화면
    $('.btn-login').click(function(){
        $('#joinModule').hide();
        $('#loginModule').show();
        return false;
    });
    $('.loginBackground').click(function(){
        $('#loginModule').hide();
    });

    // 회원가입 화면
    $('.btn-join').click(function(){
        $('#loginModule').hide();
        $('#joinModule').show();
        return false;
    });
    $('.joinBackground').click(function(){
        $('#joinModule').hide();
        return false;
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
            })
            $input.prop('checked', false);
        }else{
            $trg.css({
                'background-color': 'black'
            })
            $input.prop('checked', true);
        }
    }

    // input 선택 시 처리
    // $('.focusFunc').on("focus", function(event){
    //     lableOn($(event.target));
    // });
    // $('.focusFunc').on("blur", function(event){
    //     lableOff($(event.target));
    // });
    // // input 선택 function
    // function lableOn($obj){
    //     tempPlaceHolderTxt = $obj.attr('placeholder');
    //     $obj.css('border','1px solid mediumturquoise').attr('placeholder','');
    //     $obj.prev().stop().show();
    // }
    // function lableOff($obj){
    //     $obj.css('border','1px solid #eee').attr('placeholder',$obj.prev().text());
    //     $obj.prev().stop().hide();
    // }
});