$(function(){
    // 헤더 JS 파일입니다.
    // 메뉴 입력
    $('.header_gnb').html("<li><a class='btn-login'>로그인</a></li><li><a class='btn-join'>회원가입</a></li><li><a href='/member/myPage/mMain.html'>마이페이지</a></li><li><a>고객센터</a></li><li><a href='/etc/aboutus.html'>ABOUT US</a></li>");
    // 메뉴 입력 모바일
    $('.header_gnb_m').html("<li><a class='btn-login'>로그인</a></li><li><a class='btn-join'>회원가입</a></li><li><a href='/member/myPage/mMain.html'>마이페이지</a></li><li><a>고객센터</a></li><li><a href='/etc/aboutus.html'>ABOUT US</a></li>");
    
    //resize event
    $(window).resize(function(event){
        CloseMenu();
    })

    $('#menuBtn').click(function(){
        if ($('#menuBtn').children('svg').attr('data-icon') == 'bars') {
            OpenMenu();
            $('.mainTextBox').hide();
        }
        else if ($('#menuBtn').children('svg').attr('data-icon') == 'times') {
            CloseMenu();
        }
    });

    //Menu Toggle
    function OpenMenu(){
        var height = $('.header_gnb_m').children('li').length;
        console.log(height);
        $('#navigation_m').show();
        $('#menuBtn').children('svg').attr('data-icon', 'times');
        $('.header_top').css({'background-color': '#444'});
        if ($('.arrowUpDwon').css('display') != 'none'){
            $('.header_wrap_m').css({'height': '260px'});
        }
        $('#menuBtn').css('color','#eee');
    }

    function CloseMenu(){
        $('#navigation_m').hide();
        $('#menuBtn').children('svg').attr('data-icon', 'bars');
        $('#menuBtn').css('color','#111');
        $('.header_top').removeAttr('style');
        $('.header_wrap_m').removeAttr('style');
        $('.mainTextBox').show();
    }
})