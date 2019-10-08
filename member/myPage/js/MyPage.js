$(function(){
    $('.MyMatsuri').click(function(){
        $('div#MyPage').remove(); 
        $('section').append('<div id="content"></div>'); 
        $(document).ready(function(){
            document.getElementById("content").innerHTML='<object type="text/html" data="./mMyMatsuri.html"></object>';
        })
    });
    // var testVar = {
    //     'a': 1, 'b': 2
    // } 
    // $('.testClass').html(testVar.b);
    
});





// $(document).ready(function(){
//     document.getElementById("footer").innerHTML='<object type="text/html" data="footer.html"></object>';
// })


// $(document).ready( function() {

// 	$(".MyMatsuri").load("mMyMasuri.html");
// }

// $( 'div' ).load( 'a.html p' );

{/* <script>
      $( document ).ready( function() {
        $( '#xy' ).load( 'load-02.html #ab' );
      } );
</script> */}