const swCard = new Swiper(".sw-card", {
 // 기본값
 centeredSlides: false,
 slidesPerView: 3,
 spaceBetween: 30,
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
 navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
 },
 //  반응형
 breakpoints: {
  320: {},
  768: {},
  1220: {},
 },
});
