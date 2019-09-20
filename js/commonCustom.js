$(function(){
    $('#menuBtn').click(
        function(){
            $('#navigation_m').toggle();
            if ($('#menuBtn').text() == 'M'){
                $('#menuBtn').text('X');
                $('header').css({
                    "height": "320px",
                    "background-image": "none",
                    "background-color": "#444"
                });
            }
            else if ($('#menuBtn').text() == 'X'){
                $('#menuBtn').text('M');
                $('header').css({
                    "height": "180px"
                }).removeAttr('style');
            }
        }
    );
})