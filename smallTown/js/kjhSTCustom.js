$(function(){
    
    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, 
        },
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        
        
      });
});