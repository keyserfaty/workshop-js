(function () {
  //* 1. Add animation to translate property
  var sliderNode = document.querySelector('.slider__content__photos__list')

  sliderNode.addEventListener('click', function () {
    sliderNode.style.transform = 'translateX(-300%)'
  })
})()