var swiper = new Swiper('.banner-swiper', {

    loop: true,
    speed:2000,
    effect:'cube',
    grabCursor:true,

    cubeEffect: {
        shadow:true,
        slideShadows:true,
        shadowOffset:20,
        shadowScale:0.94,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });