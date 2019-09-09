$(function(){
    $('.btn-login').click(function(){
        var $href = $(this).attr('href');
        layer_popup($href);
    });
    function layer_popup(el){
    
        var $el = $(el);        //레이어의 id를 $el 변수에 저장
        var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수
    
        isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();
    
        var $elWidth = ~~($el.outerWidth()),
            $elHeight = ~~($el.outerHeight()),
            docWidth = $(document).width(),
            docHeight = $(document).height();
    
        // 화면의 중앙에 레이어를 띄운다.
        if ($elHeight < docHeight || $elWidth < docWidth) {
            $el.css({
                marginTop: -$elHeight /2,
                marginLeft: -$elWidth/2
            })
        } else {
            $el.css({top: 0, left: 0});
        }
    
        $el.find('a.layerClose').click(function(){
            isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
            return false;
            
        });
    
        $('.layer .dimBg').click(function(){
            $('.dim-layer').fadeOut();
            return false;
        });
        
    }
//1. 사이트 메인(index.html)에 합치는 방법
//2. 로그인으로 돌아가기 완성되면, 현재 레이어 닫고 로그인 레이어 열리도록 구현(가능하다면..)

//이메일 유효성 체크
$(".btn-layerClose").click(function(){
    var email = $("#email4id").val();
    function clearInput(){
        $("#email4id").val("");
    }
    function validateEmail(email){
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    if (validateEmail(email)) {
        location.href = "./foundID.html";
    } else {
        alert("잘못된 이메일입니다.");
    } clearInput();

    
});
//레이어 밖 영역 클릭 시 레이어 창 닫기
function layerPopClose() {
    if($(".dimBg").length){
        var oj = $(".dim-layer");
        oj.fadeOut(500);
    }
}
$(document).on("click",".dimBg",function(){
    layerPopClose();
    return false;
});

});