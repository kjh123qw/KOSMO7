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
        

        for(i=0;i<sortLength;i++){

              if(i + 1 == sortLength){
                $sort +=sortChecked[i].value;
              }else{
                $sort +=sortChecked[i].value +", ";
              }
              
        }



        
        
        // alert(checked+","+search+","+startDate+","+endDate+","+seasonChecked+",{"+$sort+"}");
        alert(keyword);
        
    })

    startDate();
    endDate();


    $('#startDateImage').click(function(){
        $('#startDate').focus();
        startDate();
    })

    $('#endDateImage').click(function(){
        $('#endDate').focus();
        // endDate();
    })

    $('#searchOption1').click(function(){
        var checked = $(this).prop('checked');
        
        if(checked == false){
            $('#toggleMsgSpan').text("전체축제조회");
        }else{
            $('#toggleMsgSpan').text("현재축제조회");
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

        if(insertKeyword == ""){
            return;
        }else if($keywordLength == 5){
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
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, 
        },
        loop: true,
        
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
          $('#firstBox').slideToggle(1000,function(){

          })
      })

      $('.mapBtn img').click(function(){
          var title = $(this).attr('title');
          

        
        var $keywordLength = $('.keywordList').length;

        if($keywordLength == 5){
            return;
        }

        var front = '<span class = "keywordList">';
        var back = '</span>';
        
        $('.keywords').append(front +"#"+title + back);
        $('.keywordSelectBox').val("");
        $('.keywordSelectBox').focus();

        keywordDelete();
      })
       


});

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
        startDate: '',	//달력에서 선택 할 수 있는 가장 빠른 날짜. 이전으로는 선택 불가능 ( d : 일 m : 달 y : 년 w : 주) sysdate
        endDate: '+10d',	//달력에서 선택 할 수 있는 가장 느린 날짜. 이후로 선택 불가 ( d : 일 m : 달 y : 년 w : 주)
        disableTouchKeyboard : false,	//모바일에서 플러그인 작동 여부 기본값 false 가 작동 true가 작동 안함.
        immediateUpdates: false,	//사용자가 보는 화면으로 바로바로 날짜를 변경할지 여부 기본값 :false 
        language : "ko"	//달력의 언어 선택, 그에 맞는 js로 교체해줘야한다. 현재 파일없음
    });
}

function endDate(){
    
}




