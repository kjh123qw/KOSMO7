$(function(){
    //resize event
    $(window).resize(function(event){
        closeMyMenu();
    })
    $('.myMenuOpen').click(function(){
        openMyMenu();
    });
    $('.myMenuClose').click(function(){
        closeMyMenu();
    });
    $('.curLoc > span').text(locationTxt);
    $('#confirmBtn').click(function(){
        $('#pwdConfirmForm').hide();
        $('#infoModifyForm').show();
    });
    $('#leaveConfirmBtn').click(function(){
        $('#pwdConfirmForm').hide();
        $('#leaveForm').show();
    });


    function openMyMenu(){
        var heightUl = $('#myPageMenu_m > ul > li').length * 40;
        $('#myPageMenu_m').show();
        $('#myPageMenu_m > ul').show();
        $('#myPageMenu_m > ul').stop().animate({'height': heightUl + 'px'}, 300)
    }
    function closeMyMenu(){
        $('#myPageMenu_m').removeAttr('style');
        $('#myPageMenu_m > ul').removeAttr('style');
    }
    function CheckingBox($trg, $input){
        if ($input.is(':checked')){
            $trg.css({
                'background-color': 'white'
            }).html('');
            $input.prop('checked', false);
        }else{
            $trg.css({
                'background-color': 'black',
                'color': 'white',
                'font-size': '20px',
                'text-align': 'center',
                'line-height': '20px'
            }).html('<i class="fas fa-check"></i>');
            $input.prop('checked', true);
        }
    }
});
