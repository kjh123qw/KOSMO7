$(function(){
    // 옵션리스트 디스플레이 구현_START
        // 클릭 이벤트
    CheckArrows();
    //resize event
    $(window).resize(function(event){
        if ($('.header_wrap_m').css('display') != 'none'){  // mobile
            $('.box_target').each(function(index, item){
                if ($(item).css('display') != 'none') {
                    OptionClose($(item).prev(), $(item));
                }
            });
        } else {  // pc
            $('.box_target').each(function(index, item){
                if ($(item).css('display') != 'none') {
                    OptionClose($(item).prev(), $(item));
                }
            });
        }
    })
    $('.region_box_m').click(function(){
        OptionView($(this), $('.region_list_box_m'), '247px');
    });
    $('.festival_box_m').click(function(){
        OptionView($(this), $('.festival_list_box_m'), '247px');
    });
    $('.date_boxs_m').click(function(){
        OptionView($('.date_boxs_m'), $('.start_calendar'), '292px');
    });
    $('.date_box_end_m').click(function(){
        if ($('#date_start_m').val() != ''){
            OptionView($(this), $('.end_calendar'), '292px');
        }
    });
    $('#keyword_m').focus(function(){
        $('.box_target').each(function(index, item){
            if ($(item).css('display') != 'none') {
                OptionClose($(item).prev(), $(item));
            }
        });
        OptionOpen($(this).parent(), $(this).parent(), 0, 0);
    });
    $('#keyword_m').blur(function(){
        OptionClose($(this).parent(), $(this).parent());
    });
    $('.box_target > div:last-of-type').click(function(){
        $('.box_target').each(function(index, item){
            if ($(item).css('display') != 'none') {
                OptionClose($(item).prev(), $(item));
            }
        });
    });
    $('.closeBox').click(function(){
        $('.box_target').each(function(index, item){
            if ($(item).css('display') != 'none') {
                OptionClose($(item).prev(), $(item));
            }
        });
    });
        // 옵션 리스트 토글, 선택된 항목 제외 다른 항목 전부 가림
    function OptionView($clTrg, $trg, heightPx){
        $('.box_target').each(function(index, item){
            if ($(item).attr('class').substr(0, 4) != $trg.attr('class').substr(0, 4)) {
                if ($(item).css('display') != 'none') {
                    OptionClose($(item).prev(), $(item));
                }
            }
        });
        if ($trg.css('display') != 'none')
            OptionClose($clTrg, $trg);
        else
            OptionOpen($clTrg, $trg, heightPx);
    }
    function IsThisDateObj($clTrg, $trg){
        if ($trg.attr('class') == 'start_calendar date_calendar_m box_target')
            return $('.date_box_m');
        else if ($trg.attr('class') == 'end_calendar date_calendar_m box_target')
            return $('.date_box_end_m');
        else
            return $clTrg;
    }
    function OptionOpen($clTrg, $trg, heightPx){
        var $clTrg2 = IsThisDateObj($clTrg, $trg);
        if ($('.header_wrap_m').css('display') != 'none'){
            $trg.show();
            $trg.children('div').show();
            CheckArrows();
        } else {
            $clTrg.prev().children('span:nth-of-type(1)').css('border-bottom','1px solid #fff');
            $clTrg.prev().children('span:nth-of-type(3)').css('border-bottom','1px solid #fff');
            $clTrg.prev().children('span:nth-of-type(4)').css('color','#fff');
            $clTrg.css('border-bottom', '1px solid #fff');
            $clTrg2.children('span').css('color','#fff');
            $clTrg2.children('div').animate({'top': '12px'}, 100);
            $clTrg.prev().animate({'height': '14px'}, 100);
            $clTrg.stop().animate({
                'height': '49px',
                'padding': '4px 10px'
            }, 100, function(){
                if ($trg.attr('class') != 'keyword_box_m') {
                    $trg.css({
                        'display': 'block',
                        'width': '1px',
                        'height': '0'
                    }).stop().animate({
                        'width': '220px',
                        'left': '275px'
                    }, 200, function(){
                        $trg.stop().animate({
                            'height': heightPx,
                            'top' : '13px'
                        }, 200, function(){
                            $trg.children('div').fadeIn(100);
                        });
                    });
                    CheckArrows();
                } else {
                    CheckArrows();
                }
            });
        }
    }
    function OptionClose($clTrg, $trg){
        var $clTrg2 = IsThisDateObj($clTrg, $trg);
        if ($('.header_wrap_m').css('display') != 'none'){
            if (BasicTextCheck($clTrg2.children('span').text()))
                $clTrg2.children('span').css('color','#fff');
            else
                $clTrg2.children('span').css('color','#aaa');
            if ($trg.attr('class') != 'keyword_box_m')
                $trg.hide();
            CheckArrows();
        } else {
            $clTrg.prev().children('span:nth-of-type(1)').removeAttr('style');
            $clTrg.prev().children('span:nth-of-type(3)').removeAttr('style');
            $clTrg.prev().children('span:nth-of-type(4)').removeAttr('style');
            $clTrg.children('span').removeAttr('style');
            $clTrg.css('border-bottom', '1px solid #aaa');
            if (BasicTextCheck($clTrg2.children('span').text()))
                $clTrg2.children('span').css('color','#fff');
            else
                $clTrg2.children('span').css('color','#aaa');
            $clTrg2.children('div').css({'top': '10px'}, 100);
            $clTrg.prev().css('height', '18px');
            $clTrg.css({
                'height': '40px',
                'padding': '0 10px'
            });
            if ($trg.attr('class') != 'keyword_box_m') {
                $trg.children('div').fadeOut(100);
                $trg.stop().animate({
                    'height': '0',
                    'top' : '36px'
                }, 100, function(){
                    $trg.stop().animate({
                        'width': '1px',
                        'left': '259px'
                    }, 100, function(){
                        $trg.removeAttr('style');
                        CheckArrows();
                    });
                });
            } else {
                CheckArrows();
            }
        }
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
        // ToggleLabel($('.region_list_box_m').css('display')!='none'?true:false, $('.region_label_m'));
        // ToggleLabel($('.festival_list_box_m').css('display')!='none'?true:false, $('.festival_label_m'));
        // DateLabel();
    }
        // 디스플레이 조건에 따른 상/하 화살표 디스플레이
    function ToggleArrow($chk, $trg){
        if ($chk.css('display') != 'none'){
            isDisplay = true;
            $trg.children('div').children('.arrowUpDwon').css('color','#fff').html('<i class="fas fa-angle-double-down"></i>');
            $trg.children('div').children('.arrowLeftRight').css('color','#fff').html('<i class="fas fa-angle-double-right"></i>');
        } else {
            $trg.children('div').children('.arrowUpDwon').css('color','#aaa').html('<i class="fas fa-angle-down"></i>');
            $trg.children('div').children('.arrowLeftRight').css('color','#aaa').html('<i class="fas fa-angle-right"></i>');
        }
    }
    function ToggleLabel(bool, $lbl){
        if (bool){
            // $lbl.css('color','#222');
            // $lbl.stop().animate({
            //     'width': '100px'
            // }, 300);
        } else {
            // $lbl.css('color','#aaa');
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
    OptionWrite($('.festival_list_box_m'));  // 최초 실행 '주제를 선택해주세요.' 입력됨
    OptionWrite($('.start_calendar'));  // 최초 실행 '날짜 선택' 입력됨
    OptionWrite($('.end_calendar'));  // 최초 실행 '-' 입력됨
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
                'background-color': '#000',
                'color': '#5CD1E5',
                'font-size': '16px',
                'text-align': 'center',
                'line-height': '16px'
            }).html('<i class="fas fa-check"></i>');
            $wholeDiv.css({
                'background-color': 'rgba(10, 60, 70, 0.9)'
            });
            // $wholeDiv.css('background-color','#dee');
        } else {
            $wholeDiv.children('div').eq(0).css('background-color', '#ccc').html('');
            $wholeDiv.css({
                'background-color': 'rgba(10, 60, 70, 0)'
            });
            // $wholeDiv.css('background-color','white');
        }
    }
        // 비주얼 텍스트 박스에 체크된 항목 텍스트 작성
    function OptionWrite($trg){
        var regText = '';
        $trg.children('[class=optionItem]').children('div:last-of-type').each(function(i, item){
            var _name = $(item).html().split(' ')[0];
            if ($('input:checkbox[name=' + _name + ']').is(':checked')){
                $(item).prev().css({
                    'background-color': '#000',
                    'color': '#5CD1E5',
                    'font-size': '16px',
                    'text-align': 'center',
                    'line-height': '16px'
                }).html('<i class="fas fa-check"></i>');
                $(item).css({
                    'background-color': 'rgba(10, 60, 70, 0.9)'
                });
                if (regText == '')
                    regText = _name
                else
                    regText += ', ' + _name;
                // $(item).css('background-color','#dee');
            } else {
                $(item).prev().css('background-color', '#ccc').html('');
                $(item).css({
                    'background-color': 'rgba(10, 60, 70, 0)'
                });
                // $(item).css('background-color','white');
            }
        })
        if (regText == '')
            BasicTextWrite($trg);
        else
            $trg.prev('div').children('span').text(regText).css('color','#fff');
    }
    function BasicTextWrite($obj){
        if ($obj.attr('class') == 'region_list_box_m box_target')
            $('.region_box_m').children('span').text('지역을 선택해 주세요.')
        else if ($obj.attr('class') == 'festival_list_box_m box_target')
            $('.festival_box_m').children('span').text('주제를 선택해 주세요.')
        else if ($obj.attr('class') == 'start_calendar date_calendar_m box_target')
            $('.date_box_m').children('span').text('날짜 선택')
        else if ($obj.attr('class') == 'end_calendar date_calendar_m box_target')
            $('.date_box_end_m').children('span').text('-')
    }
    function BasicTextCheck(txt){
        var _returnValu = true;
        if (txt == '지역을 선택해 주세요.' || txt == '주제를 선택해 주세요.' || txt == '날짜 선택' || txt == '-')
            _returnValu = false;
        return _returnValu;
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