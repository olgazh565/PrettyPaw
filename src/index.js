import './index.html';
import './page.html';
//new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';
import { videoBackgroundInit } from './modules/videoBackground';
import { menuControl } from './modules/menuControl';
import { locationHover } from './modules/locationHover';
import { initScrollTopButton } from './modules/scrollTopButton';
import { pageControl } from './modules/pageControl';

//use modules

videoBackgroundInit();
menuControl();
locationHover();
initScrollTopButton('arrow-top', false);
pageControl();

const careerImageItems = document.querySelectorAll('.career__image-item');

careerImageItems.forEach((item, i) => {
    item.classList.add(`career__image-item_${i % 2 ? 'even' : 'odd'}`)
})

slidersInit('.about__slider', {
    pagination: {
        el: '.about__slider-pagination',

        //custom pagination
        // bulletClass: 'about__bullet',
        // bulletActiveClass: 'about__bullet-active'
    }
});

slidersInit('.career__slider', {
    pagination: {
        el: '.career__slider-pagination',
    },
    breakpoints: {
        576: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            // pagination: false,
        },
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 26,
            // pagination: false,
        },
        1240: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            // pagination: false,
        },
    }
});

