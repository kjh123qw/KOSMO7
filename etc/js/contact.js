$(function(){
  $('.cont > .tabcontent').eq(0).show(); //선택티폴트 탭 0번째
  $('.tablink').eq(0).css('background-color','#eee'); // 디폴트 탭의 구별색
  $('.faqCont').hide(); // tabcontent > faqCont 숨기기
  $('div.refund').show();  // 그중 refund div만 보이기

  setInit(); //768px기준 작동
  selectFunc(); // 선택창 변환 메서드
  tableMake();        //테이블 생성 메서드
  boardChange();      //게시판 탭 메서드
  faqChange();        // 작은 게시판 탭 메서드
  popup();            //팝업메서드
  backclose();        // 배경누를시 팝업 종료 메서드
  $('.popupBtn > div').click(function(){
    popupClose();
  });
});

// 큰메뉴 탭 변경버튼
function boardChange(){
  $('.tablink').click(function(){
    var txt = $(this).text().toLowerCase();
    $('.cont > .tabcontent').hide();
    $('.tablink').removeAttr('style');
    $('#' + txt).show();
    $('.tab' + txt).css('background-color','#eee');
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
// 배경(.layerBack) 클릭시 팝업 종료 메소드 실행
function backclose(){
  $('.layerBack').click(function(){
    popupClose();
  });
}
function setInit(){  // 반응형 메서드
  let width = $(window).width();

  if(768 <= width){ // 768이상일 시.
    $('.faqTab').eq(0).css('border-bottom','5px solid #aaa'); // 작은 탭 구별색
  }
}

function selectFunc(){
  $("#respond").change(function(event){
    var checkClass = $(event.target).val();
    $('.faqCont').hide();
    $('#faq > .'+ checkClass).show();
}).change();
}

//팝업창 실행 메서드
function popupfunc() {
  $('.popUpLayer').show();
  $('.layerBack').show();
}

//팝업창 종료 메서드
function popupClose() {
  $('.popUpLayer').hide();
  $('.layerBack').hide();
}

//테이블 생성 메서드
function tableMake(){
  var content='';
  for(let i=1; i<11; i++){
    content += '<div class="row">';
    for(let j=1; j<5; j++){
      content += '<span class="cell col'+j+'">열 '+i+'-'+j+'</span>';
    }
    content += '</div>'
  }
  $('.table').append(content);
  pagingAppendAll(); //테이블 아래 페이징 생성 메소드
}

//페이징 메소드
function pagingAppendAll() {
  var paging = '';
  paging +='<div class="paging">'
  paging +='<span class="leftend">&lt;&lt;&nbsp;</span>'
  paging +='<span class="left">&nbsp;◀&nbsp;</span>'
  paging +='<span class="condi">&nbsp;1&nbsp;</span>'
  paging +='<span class="condi">2&nbsp;</span>'
  paging +='<span class="condi">3&nbsp;</span>'
  paging +='<span class="right">&nbsp;▶&nbsp;</span>'
  paging +='<span class="rightend">&gt;&gt;</span>'
  paging +='</div>'
  $('.faqCont').append(paging);
  $('.notCont').append(paging);
}
