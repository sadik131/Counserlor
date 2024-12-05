const swiper = new Swiper('.mySwiper', {
    loop: true, // Makes the slides loop infinitely
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 600,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
    },
    autoplay: {
        delay: 300000, // Auto-slide every 5 seconds
        disableOnInteraction: false,
    },
   
});