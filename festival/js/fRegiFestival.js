$(function(){

      $('#fileInput').change(function(){
        var file = document.getElementById("fileInput").files;
        var length = file.length;
        // var length = $('#photoList div').length;
        var htmlText = "";
        var fileName = "";

        if(length > 8){
          alert("파일수는 9개미만입니다");
          return false;
        }

        if(length == 0){ // 취소했을때
          // $('#fileLabel').text("File Upload");
          // $('#photoList').html("<span><i class='far fa-folder-open'></i></span><span>파일을 등록해주세요</span>");
          // $("#photoList").unbind();

          var divHtml = $('#photoList').html();
          $('#photoList').html(divHtml);
          

          return false;
        }

         //기존의 파일이 있을때 추가하기

        for(var i=0; i<length;i++){
            var url = $('#fileInput').prop("files")[i];
            blobURL = window.URL.createObjectURL(url);
            
            // htmlText += "<div onclick = 'deleteImg("+i+"); value = "+i+"'><img src="+blobURL+" title = image"+i+"></div>";
            htmlText += "<div onclick = 'deleteImg(this, "+i+"); value = "+i+"'><img src="+blobURL+" title = image"+i+"></div>";

          if(i==0 || i==length){
            fileName += file[i].name; 
          }else{
            fileName += ", "+file[i].name; 
          }

        }

        $('#photoList').html(htmlText);
        // $('#fileLabel').text(fileName);
        $('#fileLabel').text(length + "개의 파일");
        $("#photoList").sortable();
        
      })



      
  
      
     
      startDate();
      // $("#endDate").attr("disabled", true);
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






})


function deleteImg(thisDiv, num){

  // var url = $('#photoList div img[title*=image'+num+']').attr('title');
  // var file = document.getElementById("fileInput").files;


  var boolean = confirm("해당이미지를 삭제합니다.")

  if(boolean){
    thisDiv.remove();
    // file[2].select();
    // document.selection.clear();
  }else{
    return;
  }

  var length = $('#photoList div').length;
  if(length != 0){
    $('#fileLabel').text(length+"개의 파일");
  }else{
    $('#fileLabel').text("File Upload");
    $('#photoList').html("<span><i class='far fa-folder-open'></i></span><span>파일을 등록해주세요</span>");
  }


  //이름. 갯수바꾸기
};

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

function insertF(){
  
  var title = $('#exampleInputTitle').val();
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

