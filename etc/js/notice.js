$(function(){
    $('.notCont').hide(); // tabcontent > notCont 숨기기
    $('.finance').show();  // 그중 refund div만 보이기
    $('.notTab').eq(0).css('border-bottom','5px solid #aaa'); // 작은 탭 구별색
    notChange();
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