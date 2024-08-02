const swiper = new Swiper('.swiper._desktop', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper._desktop .slider_control._next',
    prevEl: '.swiper._desktop .slider_control._prev',
  },
});

const swiperMobile = new Swiper('.swiper._mobile', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper._mobile .slider_control._next',
    prevEl: '.swiper._mobile .slider_control._prev',
  },
});

$('.slide-add').click((e) => {
  const lastDesktopSlide = $('.slider._desktop .slider_item:last .slider_column:last .place:last').clone();
  const lastMobileSlide = $('.slider._mobile .slider_item:last .slider_column:last .place:last').clone();

  e.preventDefault()
  // addMobileSlide()
  createSlide(lastDesktopSlide, 'desktop')
  createSlide(lastMobileSlide, 'mobile')
})

function createSlide(lastSlide, type = 'mobile') {
  const sliderName = '.slider._' + type
  const lengthOfSlides = type === 'desktop' ? 4 : 2
  const soloMod = '_solo'
  const bigMod = '_big'
  const desktop = type === 'desktop'
  const lastSliderColumn = () => {return $(`${sliderName} .slider_item:last .slider_column:last`)}

  if ($(`${sliderName} .slider_item:last .slider_column:last .place`).length === lengthOfSlides) {
    $(`${sliderName} .slider_wrap`).append(`<div class="slider_item swiper-slide"><div class="slider_column _big ${desktop ? soloMod : ''}"></div></div>`)
    lastSliderColumn().append(lastSlide)

    swiper.update()
  } else if ($(`${sliderName} .slider_item:last .slider_column._big`).length > 1) {
    lastSliderColumn().removeClass(bigMod)
    $(`${sliderName} .slider_item:last .slider_column._solo`).removeClass(soloMod)

    lastSlide.appendTo(lastSliderColumn())
  } else if (lastSliderColumn().hasClass(bigMod)) {
    $(`${sliderName} .slider_item:last`).append('<div class="slider_column"></div>')

    lastSlide.appendTo(lastSliderColumn()).parent().addClass(bigMod)
  } else {

    lastSlide.appendTo(`${sliderName} .slider_item:last .slider_column:last`)
  }
}
