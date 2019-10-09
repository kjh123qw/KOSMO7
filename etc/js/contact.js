$(function(){
  $('.cont > .tabcontent').eq(0).show(); //선택티폴트 탭 0번째
  $('.tablink').eq(0).css('background-color','#eee'); // 디폴트 탭의 구별색
  $('.faqCont').hide(); // tabcontent > faqCont 숨기기
  $('.refund').show();  // 그중 refund div만 보이기
  $('.faqTab').eq(0).css('border-bottom','5px solid #aaa'); // 작은 탭 구별색
  boardChange(); //게시판 탭 메서드
  faqChange(); // 작은 게시판 탭 메서드
  popup();
});

// 큰메뉴 탭 변경버튼
function boardChange(){
  $('.tablink').click(function(){
    var txt = $(this).text().toLowerCase();
    $('.cont > .tabcontent').hide();
    $('.tablink').removeAttr('style');
    for(var i=0; i<3; i++){
      var id =$('.cont > .tabcontent').eq(i).attr('id');
      if(id==txt){
        $('.cont > .tabcontent').eq(i).show();
        $('.tablink').eq(i).css('background-color','#eee');
        break;
      }
    }
  });
}

// FAQ 탭버튼 작동 쿼리
function faqChange(){
  $('.faqTab').click(function(){
    var checkClass = $(this).attr('class').split(' ');
    $('.faqTab').removeAttr('style');
    $(this).css('border-bottom','5px solid #aaa');
    $('.faqCont').hide();
    $('#faq > .'+ checkClass[1]).show();    
  });
} 
//.col3 클릭시 팝업창 메서드 실행
function popup(){ 
  $('.col3').click(function(){
    popupfunc();
  });
}


//팝업창 실행 메서드
function popupfunc() {
  var screenW = screen.availWidth; // 스크린 가로사이즈
  var screenH = screen.availHeight; //스크린 세로사이즈
  var popW = 600; // 띄울창 가로
  var popH = 600; // 띄울창 세로
  var posL = (screenW-popW) / 2; // 띄울창 가로위치
  var posH = (screenH-posH) / 2; // 띄울창 세로위치

  window.open('popup.html', 'test', 'width='+popW+',height='+popH+',top='+posH+',left='+posL+',resizable=no,scrollbars=no')
}