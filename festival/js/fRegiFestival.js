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
        var fileList = new Array();
        var urlList = new Array();
        var htmlText = "";

        for(var i=0; i<length;i++){
            var url = $('#fileInput').prop("files")[i];
            blobURL = window.URL.createObjectURL(url);
            
            htmlText += "<div><img src="+blobURL+" /></div>";
        }

        $('#image').html(htmlText);
        // var ee = $('#fileInput').prop("files")[0];
        // blobURL = window.URL.createObjectURL(ee);
        
        // $('#image img').attr('src', blobURL);

        // for(var i=0; i<length;i++){
        //     fileList[i] = file[i].name; //이름담기
        //     console.log(fileList[i])
        // }

        $('#fileLabel').text("ddddd");




      })


})
