import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

import media from '../ts/functions/media'
// import quiz from '../ts/quiz'

const init = () => {

  const sliderServices = new Swiper('.services-slider .swiper', {

    pagination: {

      el: '.services-slider .swiper-pagination',
      clickable: true

    },

    slidesPerView: 1.1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    grabCursor: true,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 1.5

      },

      [media.md]: {

        slidesPerView: 2

      },

      [media.lg]: {

        slidesPerView: 3

      },

      [media.xl]: {

        slidesPerView: 4

      }

    }

  })

  const sliderEvents = new Swiper('.events-slider .swiper', {

    pagination: {

      el: '.events-slider .swiper-pagination',
      clickable: true

    },

    slidesPerView: 1.1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    grabCursor: true,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 1.5

      },

      [media.md]: {

        slidesPerView: 2

      },

      [media.lg]: {

        slidesPerView: 3

      },

      [media.xl]: {

        slidesPerView: 4

      }

    }

  })

  const sliderPartners = new Swiper('.partners-slider .swiper', {

    pagination: {

      el: '.partners-slider .swiper-pagination',
      clickable: true

    },

    navigation: {

      prevEl: '.partners-slider .swiper-button-prev',
      nextEl: '.partners-slider .swiper-button-next'

    },

    slidesPerView: 1.3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 500,
    grabCursor: true,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 1.5

      },

      [media.md]: {

        slidesPerView: 2

      },

      [media.lg]: {

        slidesPerView: 3,
        spaceBetween: 44

      }

    }

  })

  // const sliderGallery = new Swiper('.gallery-slider .swiper', {

  //   pagination: {

  //     el: '.gallery-slider .swiper-pagination',
  //     clickable: true

  //   },

  //   navigation: {

  //     prevEl: '.gallery-slider .swiper-button-prev',
  //     nextEl: '.gallery-slider .swiper-button-next'

  //   },

  //   effect: 'coverflow',
  //   slidesPerView: 1.3,
  //   spaceBetween: 20,
  //   grabCursor: true,
  //   loop: true,
  //   freeMode: true,

  //   breakpoints: {

  //     [media.sm]: {

  //       slidesPerView: 2

  //     },

  //     [media.lg]: {

  //       slidesPerView: 3

  //     }

  //   },

  //   autoplay: {

  //     delay: 3000,
  //     stopOnLastSlide: false,
  //     disableOnInteraction: false

  //   }

  // })

  // const sliderProducts = new Swiper('.products-slider .swiper', {

  //   pagination: {

  //     el: '.products-slider .swiper-pagination',
  //     clickable: true

  //   },

  //   navigation: {

  //     prevEl: '.products-slider .swiper-button-prev',
  //     nextEl: '.products-slider .swiper-button-next'

  //   },

  //   slidesPerView: 1.3,
  //   slidesPerGroup: 1,
  //   spaceBetween: 20,
  //   grabCursor: true,

  //   breakpoints: {

  //     [media.sm]: {

  //       slidesPerView: 2

  //     },

  //     [media.lg]: {

  //       slidesPerView: 4

  //     }

  //   }

  // })

  // const quizImages = new Swiper('.quiz-images .swiper', {

  //   effect: 'cube',
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   allowTouchMove: false

  // })

  // const quizSlider = new Swiper('.quiz-slider .swiper', {

  //   navigation: {

  //     prevEl: '.quiz-slider .swiper-button-prev',
  //     nextEl: '.quiz-slider .swiper-button-next'

  //   },

  //   pagination: {

  //     el: '.quiz-slider .swiper-pagination',
  //     type: 'custom',

  //     renderCustom: (swiper, current, total) => {

  //       return total - current

  //     }

  //   },

  //   effect: 'flip',
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   allowTouchMove: false,
  //   watchSlidesProgress: true,

  //   on: {

  //     slideChange: (swiper) => {

  //       quizImages.slideTo(swiper.activeIndex)

  //       quiz.checkQuizSlide(swiper.visibleSlides[0])

  //       if (swiper.visibleSlides[0] == swiper.slides[swiper.slides.length - 1]) {

  //         swiper.el.closest('[data-quiz]').setAttribute('data-quiz-end', '')

  //       } else {

  //         swiper.el.closest('[data-quiz]').removeAttribute('data-quiz-end')

  //       }

  //     }

  //   }

  // })

  // const catalogBg = new Swiper('.catalog-bg .swiper', {

  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   speed: 1000,
  //   allowTouchMove: false

  // })

  // const catalogBullets = new Swiper('.catalog-bullets .swiper', {

  //   slidesPerView: 3,
  //   slidesPerGroup: 1,
  //   spaceBetween: 20,
  //   speed: 1000,
  //   grabCursor: true,

  //   breakpoints: {

  //     [media.md]: {

  //       slidesPerView: 4

  //     }

  //   }

  // })

  // const catalogInfo = new Swiper('.catalog-info .swiper', {

  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   speed: 1000,
  //   allowTouchMove: false

  // })

  // const catalogSlider = new Swiper('.catalog-slider .swiper', {

  //   pagination: {

  //     el: '.catalog-slider .swiper-pagination',
  //     clickable: true

  //   },

  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   speed: 1000,
  //   grabCursor: true,

  //   thumbs: {

  //     swiper: catalogBullets

  //   },

  //   on: {

  //     slideChange: (swiper) => {

  //       catalogBg.slideTo(swiper.activeIndex)
  //       catalogInfo.slideTo(swiper.activeIndex)

  //     }

  //   }

  // })

  window.Swiper = Swiper

}

export default { init }