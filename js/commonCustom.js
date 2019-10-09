var txtObj = {
    'index': '메인페이지',
    'mMain': '마이페이지 메인',
    'mMyMatsuri': '기대중인 축제',
    'mMyInfo': '개인정보수정',
    'mHosting': '등록한 축제',
    'mLeave': '회원탈퇴',
    'aboutus': 'ABOUT US',
    'support': '고객센터',
    'contactus': '고객센터',
    'fDetail': '축제 상세정보',
    'fRegiFestival': '축제 등록',
    'fSearchiList': '검색 결과'
}
var locationStr = $(location).attr('href');
var locationArr = locationStr.split('/');
var locationDir = locationArr[(locationArr.length - 2)];
var locationFil = locationArr[(locationArr.length - 1)].split('.')[0];
var locationTxt = txtObj[locationFil];

$(function(){
    
    // 헤더 JS 파일입니다.
    currentMenu();
    menuSetting();
    //resize event
    $(window).resize(function(event){
        closeMenu();
    })

    $('#menuBtn').click(function(){
        openMenu();
    });
    $('.currentBox > div').click(function(){
        closeMenu();
    });

    //Current Menu Box Insert
    function currentMenu(){
        $('.header_gnb_m').before('<div class="currentBox">' + locationTxt + '<div><i class="fas fa-times"></i></div></div>');
    }
    //Menu Setting
    function menuSetting(){
        var locationRut = '';
        var depth = 0;
        while (locationDir != 'KOSMO7'){
            depth++;
            locationRut += '../';
            locationDir = locationArr[(locationArr.length - (2 + depth))];
        }
        if(depth == 0)
            locationRut = './';
        var menuHtml = '';
        console.log(locationRut);
        menuHtml = "<li><a class='btn-login'>로그인</a></li><li><a class='btn-join'>회원가입</a></li><li><a href='" + locationRut + "member/myPage/mMain.html'>마이페이지</a></li><li><a href='" + locationRut + "etc/contactus.html'>고객센터</a></li><li><a href='" + locationRut + "etc/aboutus.html'>ABOUT US</a></li>";
        // 메뉴 입력
        $('.header_gnb').html(menuHtml);
        $('.logo > a').attr('href', locationRut +'index.html');
        // 메뉴 입력 모바일
        $('.header_gnb_m').html(menuHtml);
        $('.logo_m > a').attr('href', locationRut +'index.html');
    }
    //Menu Toggle
    function openMenu(){
        $('#navigation_m').stop().show().animate({'width':'100%'}, 300, function(){
            $('.currentBox').stop().css({'color':'rgba(255,255,255,1)'});
            $('.header_gnb_m').stop().fadeIn(100);
        });
        // $('#menuBtn').children('svg').attr('data-icon', 'times');
        // $('.header_top').css({'background-color': '#444'});
        // if ($('.arrowUpDwon').css('display') != 'none'){
        //     $('.header_wrap_m').css({'height': (height * 50 + 60) + 'px'});
        // }
        // $('#menuBtn').css('color','#eee');
    }

    function closeMenu(){
        $('.currentBox').stop().removeAttr('style');
        $('.header_gnb_m').stop().removeAttr('style');
        $('#navigation_m').stop().animate({'width':'0%'}, 100, function(){
            $('#navigation_m').removeAttr('style');
        });
        // $('#menuBtn').children('svg').attr('data-icon', 'bars');
        // $('#menuBtn').css('color','#111');
        // $('.header_top').removeAttr('style');
        // $('.header_wrap_m').removeAttr('style');
        // $('.mainTextBox').show();
    }
})