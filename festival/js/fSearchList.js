$(function(){

    $( window ).resize(function() {
        //창크기 변화 감지
        var windowWidth = $( window ).width();
        console.log(windowWidth)

        if(windowWidth < 576){
            $('.sortBox > #sorts').attr('class','col');
            // $('.seasonBox > #seasons').attr('class','col');
        }else if(577 < windowWidth && windowWidth < 991){
            $('.sortBox > #sorts').attr('class','col-sm-4');
            // $('.seasonBox > #seasons').attr('class','col-sm-3'); 
        }

        if(577 < windowWidth && windowWidth < 991){
            $('.seasonBox > #seasons').attr('class','col-sm-6');
        }else if(330 < windowWidth && windowWidth < 576){
            $('.seasonBox > #seasons').attr('class','col');
        }else if(windowWidth > 992){
            $('.seasonBox > #seasons').attr('class','col');
        }else if(329 > windowWidth){
            $('.seasonBox > #seasons').attr('class','col-sm-1');
        }

     });




    $('#selectBtn').click(function(){

            var searchText = /^[가-힣|a-z|A-Z|0-9|\*]+$/
            var search = $('.selectBox:first-child').val();

            if(searchText.test(search) && search.length <10){
                searchData();
            }else{
                alert("검색어를 확인해주세요")
            }
    })

    $('#startDateImage').click(function(){
        $('#startDate').focus();
    }) //아이콘클릭시 달력

    $('#endDateImage').click(function(){
        $('#endDate').focus();
    }) //아이콘클릭시 달력

    $('#searchOption1').click(function(){
        var checked = $(this).prop('checked');
        
        if(checked == false){
            $('#toggleMsgSpan').text("전체축제조회");
            $('#toggleMsgSpan').css('backgroundColor','salmon')
            $('#toggleMsgSpan').css('color','black')
        }else{
            $('#toggleMsgSpan').text("현재진행축제");
            $('#toggleMsgSpan').css('backgroundColor','salmon')
            $('#toggleMsgSpan').css('color','white')
        }

        if(checked == false){
            $('.dateBox, #dateBoxHr').slideUp('fast');
        }else{
            $('.dateBox, #dateBoxHr').slideDown('fast');
        }
    }) //현재, 전체 토글

    $('#sortOption').click(function(){
        var sortChecked = $('#sortOption').prop('checked');

        if(sortChecked == true){
            $("input[name=sort]").prop("checked",true);
        }else{
            $("input[name=sort]").prop("checked",false);
        }
    }) //축제 종류 토글

    

    $('#searchEnter').keydown(function(key){
        if(key.keyCode == 13){
            // console.log("엔터키 적용");

            var searchText = /^[가-힣|a-z|A-Z|0-9|\*]+$/
            var search = $('.selectBox:first-child').val();

            if(searchText.test(search) && search.length <10){
                searchData();
            }else{
                alert("검색어를 확인해주세요")
            }

        }
    }) //검색버튼 엔터키

    $('#keywordBtn').click(function(){

        // $('span[class="keywordList"]').bind();

        var searchText = /^[가-힣|a-z|A-Z|0-9|\*]+$/

        var insertKeyword = $('.keywordSelectBox').val();
        var $keywordLength = $('.keywordList').length;

        if(searchText.test(insertKeyword) && insertKeyword.length <6){
            if(insertKeyword == ""){ //빈칸 제한
                return;
            }else if($keywordLength == 5){ //키워드갯수 제한
                alert('키워드는 5개 이하입니다')
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
        }else{
            alert("키워드를 확인해주세요")
            $('.keywordSelectBox').focus();
        }

        

        keywordDelete();
        
    }) //키워드 추가 제거

   
    


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
        
      }); //스와이프 



      $('.custom-select').change(function(){
          var searchVal = $(this).val();
          alert(searchVal)
      }); //조회결과 - 셀렉트바 값 리턴

    

      $('#detailSearch').keyup(function(){
        var searchText = $(this).val();
        console.log(searchText);
        console.log("keyup사용")
      }) //조회결과 - 검색창 리턴

      $('#detailSearchBtn').click(function(){
          $('#firstBox').stop().slideToggle(1000,function(){})
          $('#firstHr').stop().slideToggle(1000,function(){})
      }) //상세조회 버튼 

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

      }) //이미지 클릭시 사진 바꾸기



       

        startDate();
        $("#startDate").on("change", function(){

            if($(this).val() == ""){
              $("#endDate").attr("disabled", true);
              $("#endDate").val("");
            }else{
              $("#endDate").attr("disabled", false);
              var date = $(this).val();
              $("#endDate").val(date);
            }
    
        });
        keywordDelete();
        // $('#firstBox').css('display','none')
        // $('#firstHr').css('display','none')
        $('input[name="local"]').css('display','none');
        $('#startDate').val("시작날짜");
        $('#endDate').val("종료날짜");

         $('#hideDiv').css('display','none');

});

// ============================== function

function moreDiv(){
    $('#hideDiv').css('display','block');
    $('#moreBtn').text("더보기 2 / 2");
} //더보기 버튼클릭시 div추가

function searchData(){
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
}
//검색데이터 리턴




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
} //규모에 따른 텍스트 리턴

function keywordDelete(){
    $('span[class="keywordList"]').click(function(){
        $(this).remove();
    })
} //키워드 클릭시 삭제

function startDate(){
    $('#startDate').datepicker({
        format: "yyyy-mm-dd",	
        calendarWeeks : false, 
        todayHighlight : true ,	
        autoclose : true,	
        startDate: 'sysdate',
        endDate: '',
        disableTouchKeyboard : false,
        immediateUpdates: false,
     }).on('changeDate',function(selected){
      var sDate = new Date(selected.date.valueOf());
      $('#endDate').datepicker({format:"yyyy-mm-dd"}).datepicker('setStartDate',sDate).on('changeDate', function(){
        $(this).datepicker('hide');
      })
    });


}









