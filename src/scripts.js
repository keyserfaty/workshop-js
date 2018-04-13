(function () {
  //* 1. Add animation to translate property
  //var sliderNode = document.querySelector('.slider__content__photos__list')
  //
  //sliderNode.addEventListener('click', function () {
  //  sliderNode.style.transform = 'translateX(-300%)'
  //})

  //* 2. Add jumping to a slide directly
  //var sliderNode = document.querySelector('.slider__content__photos__list')
  //
  //sliderNode.addEventListener('click', function () {
  //  sliderNode.style.transform = 'translateX(-300%)'
  //  sliderNode.style.transitionDelay = '-2s'
  //})

  //* 3. Adding timing with brezier curves
  //var sliderNode = document.querySelector('.slider__content__photos__list')
  //
  //sliderNode.addEventListener('click', function () {
  //  sliderNode.style.transform = 'translateX(-300%)'
  //})

  //* 4. Adding timing with steps
  //var sliderNode = document.querySelector('.slider__content__photos__list')
  //
  //sliderNode.addEventListener('click', function () {
  //  sliderNode.style.transform = 'translateX(-300%)'
  //})

  //* 5. Adding transitions to steps with brezier curves
  var sliderNode = document.querySelector('.slider__content__photos__list')
  var photosNodes = document.querySelectorAll('.slider__content__photos__list__item')

  var visiblePair = [0, 1]

  function addOneToPair (arr) {
    return [addUntilNum(arr[0], 3), addUntilNum(arr[1], 3)]
  }

  function addUntilNum (num, till) {
    if (num < till) {
      return num + 1
    } else {
      return 0
    }
  }

  sliderNode.addEventListener('click', function () {
    sliderNode.classList.add('slide-right')
    sliderNode.style.transform = 'translateX(-100%)'

    setTimeout(function () {
      visiblePair = addOneToPair(visiblePair)
      for (var i = 0; i < photosNodes.length; i++) {
        if (visiblePair.includes(Number(photosNodes[i].getAttribute('data-num')))) {
          photosNodes[i].classList.remove('hide')
        } else if (visiblePair[0] === 3 && visiblePair[1] === 0) {
          sliderNode.style.flexDirection = 'row-reverse'
          sliderNode.style.transform = 'translateX(100%)'
          sliderNode.classList.remove('slide-right')
          photosNodes[i].classList.add('hide')

          setTimeout(function () {
            sliderNode.style.flexDirection = 'row'
            sliderNode.style.transform = 'translateX(-100%)'
            sliderNode.classList.remove('slide-right')
          }, 2000)
        } else {
          photosNodes[i].classList.add('hide')
          sliderNode.style.flexDirection = 'row'
          sliderNode.style.transform = 'translateX(0%)'
          sliderNode.classList.remove('slide-right')
        }
      }

    }, 2000)
  })
})()