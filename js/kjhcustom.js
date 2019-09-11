$(function(){
    $('.btn-login').click(function(){
        $('#loginModule').show();
    });

    $('.loginBackground').click(function(){
        $('#loginModule').hide();
    });

    $('.layerClose').click(function(){
        $('#loginModule').hide();
    });
    // 로그인 폼 선택 시 테두리
    $('#loginId').on("focus", function(event){
        $(event.target).css('border','1px solid #777');
    });
    $('#loginPwd').on("focus", function(event){
        $(event.target).css('border','1px solid #777');
    });
    // 로그인 폼 선택 아웃 시 테두리 제거
    $('#loginId').on("blur", function(event){
        $(event.target).css('border','1px solid #eee');
    });
    $('#loginPwd').on("blur", function(event){
        $(event.target).css('border','1px solid #eee');
    });

});