$(function(){

    $( window ).resize(function() {
        //창크기 변화 감지
        var divWidth1 = $('.imgList div img').width();
        $('.imgList div img').height(divWidth1);

        var divWidth2 = $('.imgDiv img').width();
        $('.imgDiv img').height(divWidth2);

        var modalWidth = $(window).width();
        if(modalWidth < 993){
            $( '.imgList .col-sm-3' ).removeAttr( 'data-toggle' );
            // $( '.imgList .col-sm-3' ).removeAttr( 'data-target' );
        }else{
            $( '.imgList .col-sm-3' ).attr('data-toggle','modal')
        }

        var fullWidth = $(window).width();

        if(fullWidth < 992){
            $("#fCheck").css("display","none");
        }else{
            $("#fCheck").css("display","block");
        }

     });

        var divWidth1 = $('.imgList div img').width();
        $('.imgList div img').height(divWidth1);
        var divWidth2 = $('.imgDiv img').width();
        $('.imgDiv img').height(divWidth2);
        

})

function check(num){

    if(num == 1){
        alert("승인입니다 페이지가 종료됩니다")
    }else{
        alert("반려입니다 페이지가 종료됩니다")
    }
    self.close();

}