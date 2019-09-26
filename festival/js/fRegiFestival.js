$(function(){
    $(function(){
        $('.slider').bxSlider({
            auto:true,
            pause:2000,
            autoHover:true,
            // slideWidth: 1000,
            autoControls: false,
        stopAutoOnClick: true,
        pager:false,
        controls:true
        });
      })


      $('#fileInput').change(function(){

        var file = document.getElementById("fileInput").files;
        var length = file.length;
        // var fileList = new Array();
        // var urlList = new Array();
        var htmlText = "";
        var fileName = "";

        if(length == 0){ // 취소했을때
          $('#fileLabel').text("File Upload");
          $('#photoList').html("<span>사진을 등록해주세요!!</span>");
          return false;
        }

        for(var i=0; i<length;i++){
            var url = $('#fileInput').prop("files")[i];
            blobURL = window.URL.createObjectURL(url);
            
            htmlText += "<div><img src="+blobURL+" /></div>";
            

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
