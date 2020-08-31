$( document ).ready(function() {
  // $('.main__slider').slick({
  //   fade: true,
  //   arrows: false,
  //   asNavFor: '.slider__dots',
  //   infinite: true,
  // })
  // $('.slider__dots').slick({
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   asNavFor: '.main__slider',
  //   focusOnSelect: true
  // })
  $('.games-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    infinite: false,
    swipe: false,
    dots: true,
    prevArrow:'<button type="button" class="slick-prev"><img src="imagines/prev.png" alt=""></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="imagines/next.png" alt=""></button>',
    dotsClass: 'games__slider-dots dots-style'
  })

  $('.trailers-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 3,
    infinite: false,
    swipe: false,
    dots: true,
    prevArrow:'<button type="button" class="slick-prev"><img src="imagines/prev.png" alt=""></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="imagines/next.png" alt=""></button>',
    dotsClass: 'trailers__slider-dots dots-style',
    variableWidth:true,

  })
});
