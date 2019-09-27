$(function(){

      $('#fileInput').change(function(){

        var file = document.getElementById("fileInput").files;
        var length = file.length;
        // var fileList = new Array();
        // var urlList = new Array();
        var htmlText = "";
        var fileName = "";

        if(length == 0){ // 취소했을때
          $('#fileLabel').text("File Upload");
          $('#photoList').html("<span><i class='far fa-folder-open'></i></span><span>파일을 등록해주세요</span>");
          return false;
        }

        for(var i=0; i<length;i++){
            var url = $('#fileInput').prop("files")[i];
            blobURL = window.URL.createObjectURL(url);
            
            htmlText += "<div onclick = 'deleteImg("+i+");'><img src="+blobURL+" title = "+i+"/></div>";
            

          if(i==0 || i==length){
            fileName += file[i].name; 
          }else{
            fileName += ", "+file[i].name; 
          }

        }

        $('#photoList').html(htmlText);
        $('#fileLabel').text(fileName);

      })





})


function deleteImg(num){
  alert("해당이미지를 삭제합니다");

  $('#photoList div img[title*='+num+']').parent().css('display',"none");
  //이름. 갯수바꾸기
}