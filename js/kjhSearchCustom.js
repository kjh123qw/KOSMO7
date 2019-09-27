$(function(){
    // 옵션리스트 디스플레이 구현_START
        // 클릭 이벤트
    CheckArrows();
    $('.region_box_m').click(function(){
        OptionView($('.region_list_box_m'));
    });
    $('.festival_box_m').click(function(){
        OptionView($('.festival_list_box_m'));
    });
    $('.date_box_m').click(function(){
        OptionView($('.start_calendar'));
    });
    $('.date_box_end_m').click(function(){
        if ($('#date_start_m').val() != ''){
            OptionView($('.end_calendar'));
        }
    });
    $('#keyword_m').focus(function(){
        ToggleLabel(true, $('.keyword_label_m'));
        $('.keyword_box_m').css({'border':'1px solid #222','border-bottom':'4px solid #222'});
        if ($('.header_wrap').css('display') != 'none') {
            $('.box_target').hide();
            CheckArrows();
        }
    });
    $('#keyword_m').blur(function(){
        ToggleLabel(false, $('.keyword_label_m'));
        $('.keyword_box_m').css('border','1px solid #aaa');
    });
    $('.box_target > div:last-of-type').click(function(){
        $('.box_target').hide();
        CheckArrows();
    });
    $('.closeBox').click(function(){
        $('.box_target').hide();
        $('.closeBox').hide();
        CheckArrows();
    });
        // 옵션 리스트 토글, 선택된 항목 제외 다른 항목 전부 가림
    function OptionView($trg){
        $('.box_target').each(function(index, item){
            if ($(item).attr('class').substr(0, 4) != $trg.attr('class').substr(0, 4))
                $(item).hide();
        })
        $trg.toggle();
        CheckArrows();
    }
        // 전체 화살표 체크 메서드
    var isDisplay = false; 
    function CheckArrows(){
        isDisplay = false;
        ToggleArrow($('.region_list_box_m'), $('.region_box_m'));
        ToggleArrow($('.festival_list_box_m'), $('.festival_box_m'));
        ToggleArrow($('.start_calendar'), $('.date_box_m'));
        ToggleArrow($('.end_calendar'), $('.date_box_end_m'));
        if (isDisplay)
            $('.closeBox').show();
        else
            $('.closeBox').hide();
        ToggleLabel($('.region_list_box_m').css('display')!='none'?true:false, $('.region_label_m'));
        ToggleLabel($('.festival_list_box_m').css('display')!='none'?true:false, $('.festival_label_m'));
        // DateLabel();
    }
        // 디스플레이 조건에 따른 상/하 화살표 디스플레이
    function ToggleArrow($chk, $trg){
        if ($chk.css('display') != 'none'){
            isDisplay = true;
            // $trg.css({'border':'1px solid #222', 'border-bottom':'4px solid #222'});
            $trg.children('div').children('.arrowUpDwon').html('<i class="fas fa-angle-double-down"></i>');
            $trg.children('div').children('.arrowLeftRight').html('<i class="fas fa-angle-double-right"></i>');
        }else{
            // $trg.css('border','1px solid #aaa');
            $trg.children('div').children('.arrowUpDwon').html('<i class="fas fa-angle-down"></i>');
            $trg.children('div').children('.arrowLeftRight').html('<i class="fas fa-angle-right"></i>');
        }
    }
    function ToggleLabel(bool, $lbl){
        if (bool){
            $lbl.css('color','#222');
            // $lbl.stop().animate({
            //     'width': '100px'
            // }, 300);
        }else{
            $lbl.css('color','#aaa');
            // $lbl.stop().animate({
            //     'width': '130px'
            // }, 300);
        }
    }
    function DateLabel() {
        if ($('.start_calendar').css('display')!='none') {
            $('.date_label_m').children('span:nth-of-type(1)').animate({
                'width': '0'
            }, 300);
        } else {
            $('.date_label_m').children('span:nth-of-type(1)').animate({
                'width': '15px'
            }, 300);
        }
        if ($('.end_calendar').css('display')!='none') {
            $('.date_label_m').children('span:nth-of-type(3)').animate({
                'width': '0'
            }, 300);
        } else {
            $('.date_label_m').children('span:nth-of-type(3)').animate({
                'width': '15px'
            }, 300);
        }
    }
    // 옵션리스트 디스플레이 구현_END
    // 옵션리스트 체크 구현_START
    OptionWrite($('.region_list_box_m'));  // 최초 실행 '지역을 선택해주세요.' 입력됨
    OptionWrite($('.festival_list_box_m'));  // 최초 실행 '지역을 선택해주세요.' 입력됨
    $('.optionItem').click(function(){
        var _name = $(this).children('div').eq(1).html().split(' ')[0]
        if ($('input:checkbox[name=' + _name + ']').is(':checked'))
            $('input:checkbox[name=' + _name + ']').prop('checked', false);
        else
            $('input:checkbox[name=' + _name + ']').prop('checked', true);
            MarkWhole($(this).prevAll('[class=wholeItem]'));
        OptionWrite($(this).parent());
    });
        // 전체 선택 버튼 클릭시 확인 후 전체 선택 선체 해제한뒤 비주얼 체크 박스 체크
    $('.wholeItem').click(function(){
        var checkInput = CheckWhole($(this));
        $(this).nextAll('[class=optionItem]').each(function(i, item){
            var _name = $(this).children('div').eq(1).html().split(' ')[0]
            $('input:checkbox[name=' + _name + ']').prop('checked', !checkInput);
        });
        MarkWhole($(this))
        OptionWrite($(this).parent());
    });
        // 전체 선택 여부 확인 함수
    function CheckWhole($wholeDiv){
        var checkInput = true;
        $wholeDiv.nextAll('[class=optionItem]').each(function(i, item){
            var _name = $(this).children('div').eq(1).html().split(' ')[0]
            if (!$('input:checkbox[name=' + _name + ']').is(':checked'))
                checkInput = false;
        });
        return checkInput;  // 전체 선택일 경우 true 리턴함
    }
        // 전체 선택 비주얼 체크박스 체크함
    function MarkWhole($wholeDiv){
        if (CheckWhole($wholeDiv)) {
            $wholeDiv.children('div').eq(0).css({
                'background-color': 'black',
                'color': 'white',
                'font-size': '16px',
                'text-align': 'center',
                'line-height': '16px'
            }).html('<i class="fas fa-check"></i>');
            $wholeDiv.css('background-color','#dee');
        }
        else {
            $wholeDiv.children('div').eq(0).css('background-color', 'white').html('');
            $wholeDiv.css('background-color','white');
        }
    }
        // 비주얼 텍스트 박스에 체크된 항목 텍스트 작성
    function OptionWrite($trg){
        var regText = '';
        $trg.children('[class=optionItem]').children('div:last-of-type').each(function(i, item){
            var _name = $(item).html().split(' ')[0];
            if ($('input:checkbox[name=' + _name + ']').is(':checked')){
                $(item).prev().css({
                    'background-color': 'black',
                    'color': 'white',
                    'font-size': '16px',
                    'text-align': 'center',
                    'line-height': '16px'
                }).html('<i class="fas fa-check"></i>');
                if (regText == '')
                    regText = _name
                else
                    regText += ', ' + _name;
                $(item).css('background-color','#dee');
            }else{
                $(item).prev().css('background-color', 'white').html('');
                $(item).css('background-color','white');
            }
        })
        if (regText == '')
            $trg.prev('div').children('span').text('지역을 선택해주세요.').css('color','#aaa');
        else
            $trg.prev('div').children('span').text(regText).css('color','#fff');
    }
    // 옵션리스트 체크 구현_END
    // 기간 기능 구현_START
    $.datepicker.setDefaults({
        dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
        dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], 
        monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dateFormat: 'yy.mm.dd'
    });
    $('#calendar_start').datepicker({
        onSelect: function(date) {
            $('.date_box_m > span').html(date);
            $('#date_start_m').val(date);
            $('.date_box_m > span').css({
                color: 'black'
            });
            $('.date_box_end_m').css({
                color: 'black',
                cursor: 'pointer'
            });
            $('#calendar_end').datepicker( 'option', 'minDate', date );
            // if($('#date_end_m').val() != '') {
            //     if ((parseInt($('#date_end_m').val().replace('.', '').replace('.', '')) <= parseInt(date.replace('.', '').replace('.', '')))){
            //         $('#calendar_end').datepicker('setDate', date);
            //         $('.date_box_end_m > span').html(date);
            //         $('#date_end_m').val(date);
            //     }
            // }else{
            //     $('#calendar_end').datepicker('setDate', date);
            //     $('.date_box_end_m > span').html(date);
            //     $('#date_end_m').val(date);
            // }
            $('#calendar_end').datepicker('setDate', date);
            $('.date_box_end_m > span').html(date);
            $('#date_end_m').val(date);
            $('.start_calendar').hide();
            $('.end_calendar').show();
            CheckArrows();
        }
    });
    // 
    $('#calendar_end').datepicker({
        onSelect: function(date) {
            $('.date_box_end_m > span').html(date);
            $('#date_end_m').val(date);
            $('.end_calendar').hide();
            CheckArrows();
        }
    });
    // 기간 기능 구현_END
});