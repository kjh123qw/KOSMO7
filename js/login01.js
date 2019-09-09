function layerPop(){

    // 화면의 높이와 너비를 구한다.
    var backHeight = $(document).height();  
    var backWidth = $(window).width();  

    // 팝업창 넓이,높이 구하고 중앙정렬을 위한
    let width = $(".pop-layer").width() / 2
    let height = $(".pop-layer").height() / 2;

    let left = backWidth / 2 - width;
    let top = backHeight /2 - height;

    //배경의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
    // $(".back").css({"width":backWidth,"height":backHeight}); 
    $(".pop-layer").css({"top":top,"left":left});

    //애니메이션 효과 -  60% 불투명도로 간다.
    // $(".back").fadeIn(0);      
    $(".back").fadeTo("slow",0.6);    

    //팝업 띄운다.
    $(".pop-layer").show();
    $("#div1").show();
    $("#div2").hide(); // *일시적으로 아이디찾기 숨기기
}
 
$(document).ready(function(){
    //배경 검게 띄우기
    $(".btn-login").click(function(e){
        e.preventDefault();
        layerPop();
    });

    //닫기 버튼을 눌렀을 때
    $(".pop-layer .layerClose").click(function (e) {  
        //링크 기본동작은 작동하지 않도록 한다.
        e.preventDefault();  
        $(".back, .pop-layer").hide();  
    });       

    //배경을 눌렀을 때
    $(".back").click(function () {  
        $(this).hide();  
        $(".pop-layer").hide();  

    });     
    
    $('.btn > a:eq(0)').click(function(){
        $('#div1').hide();
        $('#div2').show();
    });

});

