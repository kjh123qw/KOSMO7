$(function(){

  $( window ).resize(function() {

    var width = $(window).width();

    if(width <577){
      $("#kindsDiv > div").attr("class","form-check form-check-inline col-sm-4")
    }else{
      $("#kindsDiv > div").attr("class","form-check form-check-inline col")
    }

  });

      $('#fileInput').change(function(){
        var file = document.getElementById("fileInput").files;
        var length = file.length;
        var htmlText = "";
        var fileName = "";

        if(length > 8){
          alert("파일수는 9개미만입니다");
          return false;
        }

        if(length == 0){ // 취소했을때
          var divHtml = $('#photoList').html();
          $('#photoList').html(divHtml);
          return false;
        }

        for(var i=0; i<length;i++){
            var url = $('#fileInput').prop("files")[i];
            blobURL = window.URL.createObjectURL(url);

            htmlText += "<div onclick = 'deleteImg(this, "+i+"); value = "+i+"' name = 'imageDiv'><img src="+blobURL+" title = image"+i+"></div>";
        }

        $('#photoList').html(htmlText);
        $('#fileLabel').text(length + "개의 파일");
        $("#photoList").sortable(); //드래그 설정
        
      })

      $('#keywordBtn').click(function(){

        var keywordText = /^[가-힣|a-z|A-Z|0-9|\*]+$/;
        var insertKeyword = $('#keywordInput').val();
        var $keywordLength = $('.keywordList').length; // 올라가있는 키워드 개수

        if(keywordText.test(insertKeyword) && insertKeyword.length <6){
          if(insertKeyword == ""){ //빈칸 제한
              return;
          }else if($keywordLength == 5){ //키워드갯수 제한
              alert('키워드는 5개 이하입니다')
              $('#keywordInput').val('');
              return;
          }else if(insertKeyword.length > 6){ //글자수제한
              $('#keywordInput').val('');
              return;
          }

          var front = '<span class = "keywordList">';
          var back = '</span>';

          $('#keywordsDiv').append(front +"#"+insertKeyword + back);
          $('#keywordInput').focus();
          $('#keywordInput').val("");

        }else{
          alert("키워드를 확인해주세요")
            $('#keywordInput').focus();
        }
        keywordDelete();
      })

      startDate();
      $("#startDate").on("change", function(){ //달력 초기설정
        if($(this).val() != ""){
          var date = $(this).val();
          $("#endDate").val(date);
        }
    });






})


function deleteImg(thisDiv, num){ //이미지 클릭시 삭제
  var boolean = confirm("해당이미지를 삭제합니다.")
  if(boolean){
    thisDiv.remove();
  }else{
    return;
  }

  var length = $('#photoList div').length;
  if(length != 0){
    $('#fileLabel').text(length+"개의 파일");
  }else{
    $('#fileLabel').text("File Upload");
    $('#photoList').html("<span><i class='far fa-folder-open'></i></span><span>파일을 등록해주세요</span>");
    $("#photoList").sortable("destroy");
  }
};

function startDate(){ //달력시작
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

function insertF(){ //신청하기 버튼 클릭시 
  
  var title = $('#exampleInputTitle').val();
  var subTitle = $('#exampleInputSubitle').val();
  var startDate = $('#startDate').val();
  var endDate = $('#endDate').val();
  var infoF = $('#exampleInputInfo').val();
  var address = $('#exampleInputaddress').val();
  var season = $('input[name="inlineRadioOptions"]:checked').val();
  var location = $('#locationF option:selected').val();
  var size = $('#sizeF option:selected').val();
  var seaeon = $('input[name="inlineRadioOptions"]:checked').val();

  var sort = $('input[name="inlinecheckboxOptions"]:checked');
  var sortLength = $('input[name="inlinecheckboxOptions"]:checked').length;
  var $sort = "";

  for(i=0;i<sortLength;i++){
    if(i + 1 == sortLength){
      $sort +=sort[i].value;
    }else{
      $sort +=sort[i].value +", ";
    }  
  }

  var web = $('#websiteF').val();
  var phone = $('#phoneF').val();
  var sns1 = $('#sns1').val();
  var sns2 = $('#sns2').val();


  

}

function keywordDelete(){//키워드 클릭시 삭제
  $('span[class="keywordList"]').click(function(){
      $(this).remove();
  })
} 