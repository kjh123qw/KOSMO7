$(function(){

    $('#selectBtn').click(function(){
        var search = $('.selectBox:first-child').val();
        var startDate = $('#startDate').val();
        var endDate = $('#endDate').val();
        var checked = $('#searchOption1').prop('checked');
        var seasonChecked = $('input[name="season"]:checked').val();

        var sortChecked = $('input[name="sort"]:checked');
        var sortLength = $('input[name="sort"]:checked').length;
        var $sort = "";

        var keyword = $('.keywordList').text(); //파싱필요함

        var simaChecked = $('input[name="local"]:checked');
        var simaLength = $('input[name="local"]:checked').length;
        var $sima = "";
        

        for(i=0;i<sortLength;i++){

              if(i + 1 == sortLength){
                $sort +=sortChecked[i].value;
              }else{
                $sort +=sortChecked[i].value +", ";
              }
              
        }

        for(i=0; i< simaLength; i++){
            if(i + 1 == simaLength){
                $sima +=simaChecked[i].value;
              }else{
                $sima +=simaChecked[i].value +", ";
              }
        }



        
        
        // alert(checked+","+search+","+startDate+","+endDate+","+seasonChecked+",{"+$sort+"}");
        // alert(keyword);
        alert($sima);
        
    })

    startDate();
    // endDate();



    $('#startDateImage').click(function(){
        $('#startDate').focus();
    })

    $('#endDateImage').click(function(){
        $('#endDate').focus();
    })

    $('#searchOption1').click(function(){
        var checked = $(this).prop('checked');
        
        if(checked == false){
            $('#toggleMsgSpan').text("날짜상관없는 전체축제조회입니다");
            $('#toggleMsgSpan').css('backgroundColor','darksalmon')
            $('#toggleMsgSpan').css('border','2px solid antiquewhite')
        }else{
            $('#toggleMsgSpan').text("현재진행중인 축제조회입니다");
            $('#toggleMsgSpan').css('backgroundColor','antiquewhite')
            $('#toggleMsgSpan').css('border','2px solid darksalmon')
        }

        if(checked == false){
            $('.dateBox, #dateBoxHr').slideUp('fast');
        }else{
            $('.dateBox, #dateBoxHr').slideDown('fast');
        }

        

    })

    $('#sortOption').click(function(){

        var sortChecked = $('#sortOption').prop('checked');

        if(sortChecked == true){
            $("input[name=sort]").prop("checked",true);
        }else{
            $("input[name=sort]").prop("checked",false);
        }

    })

    

    $('#searchEnter').keydown(function(key){
        if(key.keyCode == 13){
            console.log("엔터키 적용");
        }
    })

    // $('.mapBox').mousemove(function(event){
    //     var x = event.pageX;
    //     var y = event.pageY;
    //     console.log(x,y)
    // })


    $('#keywordBtn').click(function(){

        // $('span[class="keywordList"]').bind();

        var insertKeyword = $('.keywordSelectBox').val();
        var $keywordLength = $('.keywordList').length;

        if(insertKeyword == ""){ //빈칸 제한
            return;
        }else if($keywordLength == 5){ //키워드갯수 제한
            $('.keywordSelectBox').val('');
            return;
        }else if(insertKeyword.length > 6){ //글자수제한
            $('.keywordSelectBox').val('');
            return;
        }

        var front = '<span class = "keywordList">';
        var back = '</span>';
        
        $('.keywords').append(front +"#"+insertKeyword + back);
        $('.keywordSelectBox').val("");
        $('.keywordSelectBox').focus();

        keywordDelete();
        
    })

   
    keywordDelete();


    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, 
        },
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        
        
      });



      $('.custom-select').change(function(){
          var searchVal = $(this).val();
          alert(searchVal)
      });

    

      $('#detailSearch').keyup(function(){
        var searchText = $(this).val();
        console.log(searchText);
      })

      $('#detailSearchBtn').click(function(){
          $('#firstBox').stop().slideToggle(1000,function(){})
          $('#firstHr').stop().slideToggle(1000,function(){})
      })

      $('.mapBtn img').click(function(){

        var alt = $(this).attr('alt');
        var nowImage = $(this).attr('src');
        var chackImage = './img/check.jpg';

        if(nowImage != './img/check.jpg'){
            $(this).attr('src',chackImage);
        }else{
            $(this).attr('src','./img/yujisang/'+alt+'.png');
            // $(this).attr('src','./img/image1.jpg');
        }

          var simaCheckName = $(this).next().text();         
          var simaChecked = "";
          if(simaCheckName == "훗카이도"){
            simaChecked = $('#sima1').prop('checked');
            if(simaChecked){
                $("input[id='sima1']").prop("checked",false);
            }else{
                $("input[id='sima1']").prop("checked",true);
            }      
          }else if(simaCheckName == '혼슈'){
            simaChecked = $('#sima2').prop('checked');
            if(simaChecked){
                $("input[id='sima2']").prop("checked",false);
            }else{
                $("input[id='sima2']").prop("checked",true);
            }
          }else if(simaCheckName == '시코쿠'){
            simaChecked = $('#sima3').prop('checked');
            if(simaChecked){
                $("input[id='sima3']").prop("checked",false);
            }else{
                $("input[id='sima3']").prop("checked",true);
            }
          }else{
            simaChecked = $('#sima4').prop('checked');
            if(simaChecked){
                $("input[id='sima4']").prop("checked",false);
            }else{
                $("input[id='sima4']").prop("checked",true);
            }
            
          }

      })



       

        //   $('#firstBox').css('display','none')
        //   $('#firstHr').css('display','none')
         $('input[name="local"]').css('display','none');
         $('#startDate').val("시작날짜");
         $('#endDate').val("종료날짜");

         

});

function rangeVal(obj){
    var size = $('#sizeRange').val();
    var result;

    if(size == 1){
        result = "소형";
    }else if(size == 2){
        result = "중형";
    }else{
        result = "대형";
    }

    $('.rengeDiv p:last').text(result);
}

function keywordDelete(){
    $('span[class="keywordList"]').click(function(){
        $(this).remove();
    })
}

function startDate(){
    $('#startDate').datepicker({


        format: "yyyy-mm-dd",	//데이터 포맷 형식(yyyy : 년 mm : 월 dd : 일 )
        calendarWeeks : false, //캘린더 옆에 몇 주차인지 보여주는 옵션 기본값 false 보여주려면 true
        todayHighlight : true ,	//오늘 날짜에 하이라이팅 기능 기본값 :false 
        autoclose : true,	//사용자가 날짜를 클릭하면 자동 캘린더가 닫히는 옵션
        startDate: 'sysdate',	//달력에서 선택 할 수 있는 가장 빠른 날짜. 이전으로는 선택 불가능 ( d : 일 m : 달 y : 년 w : 주) sysdate
        endDate: '',	//달력에서 선택 할 수 있는 가장 느린 날짜. 이후로 선택 불가 ( d : 일 m : 달 y : 년 w : 주)
        disableTouchKeyboard : false,	//모바일에서 플러그인 작동 여부 기본값 false 가 작동 true가 작동 안함.
        immediateUpdates: false,	//사용자가 보는 화면으로 바로바로 날짜를 변경할지 여부 기본값 :false 
        language : "ko",	//달력의 언어 선택, 그에 맞는 js로 교체해줘야한다. 현재 파일없음
        
    });

}

function startDateSelect(){
    var startDate = $('#startDate').val();
    $('#endDate').val(startDate);

    if($('#startDate').val() == ""){
        $('#endDate').prop('disabled', true);    
    }else{
        $('#endDate').prop('disabled', false);
        // $('#endDate').focus();
        endDateClick();
        
    }
}

function endDateSelect(){
    var startDate = $('#startDate').val();
    var endDate = $('#endDate').val();

    var day = new Date(startDate);
    var sYear = day.getFullYear();
    var sMonth = day.getMonth()+1;
    var sDay = day.getDate();

    var day = new Date(endDate);
    var eYear = day.getFullYear();
    var eMonth = day.getMonth()+1;
    var eDay = day.getDate();

    // console.log(sYear)
    // console.log(sMonth)
    // console.log(sDay)
    // console.log(eYear)
    // console.log(eMonth)
    // console.log(eDay)

    if(sMonth == eMonth && sDay > eDay){ //날짜 수정 필요
        alert('종료날짜를 재설정해주세요')
        $('#endDate').val(null);
        $('#endDate').focus();
        // $('#endDate').focusout();
        // $('#startDate').focus();
        // $('#startDate').val(" ");
    }
    
 


}


function endDateClick(){
    
    var endDay = $('#endDate').val();
    // var endDay2 = $('#startDate').val();
    
    if(endDay == ""){
        return;
    }

    console.log(endDay)

    $('#endDate').datepicker({

        format: "yyyy-mm-dd",	//데이터 포맷 형식(yyyy : 년 mm : 월 dd : 일 )
        calendarWeeks : false, //캘린더 옆에 몇 주차인지 보여주는 옵션 기본값 false 보여주려면 true
        todayHighlight : true ,	//오늘 날짜에 하이라이팅 기능 기본값 :false 
        autoclose : true,	//사용자가 날짜를 클릭하면 자동 캘린더가 닫히는 옵션
        startDate: endDay,	//달력에서 선택 할 수 있는 가장 빠른 날짜. 이전으로는 선택 불가능 ( d : 일 m : 달 y : 년 w : 주) sysdate
        endDate: '',	//달력에서 선택 할 수 있는 가장 느린 날짜. 이후로 선택 불가 ( d : 일 m : 달 y : 년 w : 주)
        disableTouchKeyboard : false,	//모바일에서 플러그인 작동 여부 기본값 false 가 작동 true가 작동 안함.
        immediateUpdates: false,	//사용자가 보는 화면으로 바로바로 날짜를 변경할지 여부 기본값 :false 
        language : "ko"	//달력의 언어 선택, 그에 맞는 js로 교체해줘야한다. 현재 파일없음
    });

}




