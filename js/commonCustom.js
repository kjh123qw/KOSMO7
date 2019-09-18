$(function(){
    $('#menuBtn').click(
        function(){
            $('#navigation_m').toggle();
            if ($('#menuBtn').text() == 'M')
                $('#menuBtn').text('X');
            else if ($('#menuBtn').text() == 'X')
                $('#menuBtn').text('M');
        }
    );
})