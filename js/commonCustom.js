$(function(){
    $('#menuBtn').click(
        function(){
            $('#navigation_m').toggle();
            if ($('#menuBtn').text() == 'M'){
                $('#menuBtn').text('X');
                $('.header_top').css({
                    "background-color": "#444"
                });
                $('.header_wrap').css({
                    "height": "300px"
                });
            }
            else if ($('#menuBtn').text() == 'X'){
                $('#menuBtn').text('M');
                $('.header_top').removeAttr('style');
                $('.header_wrap').removeAttr('style');
            }
        }
    );
})