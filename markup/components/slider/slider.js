const swiper = new Swiper(".swiper._desktop", {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper._desktop .slider_control._next',
    prevEl: '.swiper._desktop .slider_control._prev',
  },
});

const swiperMobile = new Swiper(".swiper._mobile", {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper._mobile .slider_control._next',
    prevEl: '.swiper._mobile .slider_control._prev',
  },
});

$('.slide-add').click(function(e) {
  e.preventDefault()
  addMobileSlide()
  addSlide()
})


function addSlide() {
  let lastSlide = $('.slider._desktop .slider_item:last .slider_column:last .place:last').clone();

  if ($('.slider._desktop .slider_item:last .slider_column:last .place').length == 4) {
    $('.slider._desktop .slider_wrap').append('<div class="slider_item swiper-slide"><div class="slider_column _big _solo"></div></div>')
    $('.slider._desktop .slider_item:last .slider_column:last').append(lastSlide)

    swiper.update()
  } else if ($('.slider._desktop .slider_item:last .slider_column._big').length > 1) {
    $('.slider._desktop .slider_item:last .slider_column:last').removeClass('_big')
    $('.slider._desktop .slider_item:last .slider_column._solo').removeClass('_solo')

    lastSlide.appendTo($('.slider._desktop .slider_item:last .slider_column:last'))
  } else if ($('.slider._desktop .slider_item:last .slider_column:last').hasClass('_big')) {
    $('.slider._desktop .slider_item:last').append('<div class="slider_column"></div>')

    lastSlide.appendTo($('.slider._desktop .slider_item:last .slider_column:last')).parent().addClass('_big')
  } else {
    lastSlide.appendTo('.slider._desktop .slider_item:last .slider_column:last')
  }
}

function addMobileSlide() {
  let lastSlide = $('.slider._mobile .slider_item:last .slider_column:last .place:last').clone();

  if ($('.slider._mobile .slider_item:last .slider_column:last .place').length == 2) {
    $('.slider._mobile .slider_wrap').append('<div class="slider_item swiper-slide"><div class="slider_column _big"></div></div>')
    $('.slider._mobile .slider_item:last .slider_column:last').append(lastSlide)

    swiperMobile.update()
  } else if ($('.slider._mobile .slider_item:last .slider_column._big').length > 1) {
    $('.slider._mobile .slider_item:last .slider_column:last').removeClass('_big')
    $('.slider._mobile .slider_item:last .slider_column._solo').removeClass('_solo')

    lastSlide.appendTo($('.slider._mobile .slider_item:last .slider_column:last'))
  } else if ($('.slider._mobile .slider_item:last .slider_column:last').hasClass('_big')) {
    $('.slider._mobile .slider_item:last').append('<div class="slider_column"></div>')

    lastSlide.appendTo($('.slider._mobile .slider_item:last .slider_column:last'))
  } else {
    lastSlide.appendTo('.slider._mobile .slider_item:last .slider_column:last')
  }
}