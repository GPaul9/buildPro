import 'normalize.css';
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import '@/styles/main.scss';



document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.swiper').forEach(swiperEl => {
    console.log(swiperEl)
    new Swiper(swiperEl, {
      modules: [Navigation, Scrollbar],

      slidesPerView: 'auto',
      freeMode: true,

      navigation: {
        nextEl: swiperEl.querySelector('.swiper-button-next'),
        prevEl: swiperEl.querySelector('.swiper-button-prev'),
      },

      scrollbar: {
        el: swiperEl.querySelector('.swiper-scrollbar'),
        draggable: true,
        dragSize: 60,

      },
    })
  })
});
