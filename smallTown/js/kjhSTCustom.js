$(function(){
  bindMouse();  // bind 초기화
  
  $('.sTownBox').each(function(i, e){
    var txt = $(e).find('span').eq(1).text().slice(0, 140);  // 영어: 230, 한글: 140
    var txtEndIndex = txt.lastIndexOf(' ', 230);
    txt = txt.slice(0, txtEndIndex) + "...";
    $(e).find('span').eq(1).text(txt);
  });
  // 마우스 오버 확대 메소드 bind
  function bindMouse(){
    $('.sTownBox a').bind('mouseover',function(e){
      zoomImg($(e.target));
    });
    $('.sTownBox a').bind('mouseout',function(e){
      zoomOutImg($(e.target));
    });
  }
  // 이미지 확대 메소드
  function zoomImg($e){
    $e.next().children('img').stop().animate({
      height: '120%',
      top: '-10%'
    }, 1500);
    // $e.next().next().children('span').eq('0').stop().animate({
    //   fontSize: '26px'
    // }, 500);
  }
  // 이미지 축소 메소드
  function zoomOutImg($e){
    $e.next().children('img').stop().animate({
      height: '100%',
      top: '0'
    }, 100);
    // $e.next().next().next().stop().animate({
    //   height: '35px',
    //   fontSize: '16px'
    // }, 100);
  }
});
      // console.log($(e.target) + ' ' + $(e.target).parent('a').parent('div').width() + ' / ' +$(e.target).parent('a').parent('div').height());