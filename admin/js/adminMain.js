$(function(){
    
    

   
        
    $('.barIcon').click(function(){
        var color = $('.barIcon').css('color');
        console.log(color)

        if(color == 'rgb(33, 37, 41)'){
            $('.barIcon').css('color','white')
            $('.aside').stop().animate({left:-400})
            $('.aside').css('display','none')
            // $('#section').css('transition-duration','2s')
            $('#section').attr('class',"col-sm-12");

        }else{
            $('.barIcon').css('color','rgb(33, 37, 41)')
            $('.aside').stop().animate({left:0})
            $('.aside').css('display','block')
            // $('#section').css('transition-duration','2s')
            $('#section').attr('class',"col-sm-9");
        }
    })

    



    

    
})