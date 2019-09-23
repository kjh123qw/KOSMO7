$(function(){
    $('#menuBtn').click(
        function(){
            $('#navigation_m').toggle();
            if ($('#menuBtn').children('svg').attr('data-icon') == 'bars'){
                $('#menuBtn').children('svg').attr('data-icon', 'times');
                $('.header_top').css({
                    "background-color": "#444"
                });
                $('.header_wrap_m').css({
                    "height": "300px"
                });
                $('#menuBtn').css('color','#eee');
                $('#search_window_m').css('top','0');
            }
            else if ($('#menuBtn').children('svg').attr('data-icon') == 'times'){
                $('#menuBtn').children('svg').attr('data-icon', 'bars');
                $('#menuBtn').css('color','#333');
                $('.header_top').removeAttr('style');
                $('.header_wrap_m').removeAttr('style');
                $('#search_window_m').removeAttr('style');
            }
        }
    );
})