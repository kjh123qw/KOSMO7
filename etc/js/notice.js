$(function(){
    $('.notCont').hide(); // tabcontent > notCont 숨기기
    $('.finance').show();  // 그중 refund div만 보이기
    notSetInit();//768px기준 작동
    notSelectFunc();// 선택창 변환 메서드
    notChange();// 작은 게시판 탭 메서드
});

// notice 탭버튼 작동 쿼리
function notChange(){
    $('.notTab').click(function(){
      var checkClass = $(this).attr('class').split(' ');
      $('.notTab').removeAttr('style');
      $(this).css('border-bottom','5px solid #aaa');
      $('.notCont').hide();
      $('#notice > .'+ checkClass[1]).show();    
    });
  } 

// 반응형 메서드
function notSetInit(){  
  let width = $(window).width();

  if(768 <= width){ // 768이상일 시.
    $('.notTab').eq(0).css('border-bottom','5px solid #aaa'); // 작은 탭 구별색
  }
}
  
function notSelectFunc(){
  $("#notRespond").change(function(event){
    var checkClass = $(event.target).val();
    $('.notCont').hide();
    $('#notice > .'+ checkClass).show();
});
}