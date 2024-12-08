// navbar
const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    menuToggle.addEventListener('click', () => {
      // Toggle the hidden and transform classes
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden', '-translate-y-full');
        mobileMenu.classList.add('translate-y-0');
      } else {
        mobileMenu.classList.add('-translate-y-full');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300); 
      }
    });

const swiper = new Swiper('.mySwiper', {
    loop: true, // Makes the slides loop infinitely
    slidesPerView: 1, // Default for small screens
    spaceBetween: 30,
    speed: 600,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// scroll releav
const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: "3000",
    delay: 600,
    // reset:true 
})

sr.reveal(".hero__text", {
    duration: "2000"
})
sr.reveal(".service__text", {
    duration: "1000"
})
sr.reveal(".service__cards > div", {
    distance: "100px",
    interval: 200
})

sr.reveal(".service__section", {
    duration: "2000"
})
sr.reveal(".client__animate", {
    duration: "2000"
})
sr.reveal(".package__text", {
    duration: "2000"
})
sr.reveal(".package__cards > div", {
    distance: "100px",
    interval: 200
})
sr.reveal(".contect__form", {
    duration: "1500"
})
sr.reveal(".blog__text", {
    duration: "1500"
})
sr.reveal(".footer__icon", {
    duration: "1500"
})
sr.reveal(".blog__cards > div", {
    distance: "100px",
    interval: 200
})