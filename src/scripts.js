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

  setInterval(function () {
    sliderNode.classList.add('slide-right')
    sliderNode.style.transform = 'translateX(-100%)'

    setTimeout(function () {
      visiblePair = addOneToPair(visiblePair)
      for (var i = 0; i < photosNodes.length; i++) {
        //sliderNode.classList.add('slide-right')
        // If photo is in pair that needs to be shown display it
        if (visiblePair.includes(Number(photosNodes[i].getAttribute('data-num')))) {
          photosNodes[i].classList.remove('hide')
        // If not hide it and move it to the beginning
        } else {
          photosNodes[i].classList.add('hide')
          sliderNode.style.transform = 'translateX(0%)'
          sliderNode.classList.remove('slide-right')
        }

        // If pair is the last in the row and picture is the last one
        if ((visiblePair[0] === 3 && visiblePair[1] === 0) && Number(photosNodes[i].getAttribute('data-num')) === 3) {
          // Reverse row so that 4 -> 1 (number 1 follows 4)
          sliderNode.style.flexDirection = 'row-reverse'
          sliderNode.style.transform = 'translateX(100%)'
          sliderNode.classList.remove('slide-right')

          // After 2 seconds (when the slide has passed) set it back to row 1 -> 2
          setTimeout(function () {
            sliderNode.style.flexDirection = 'row'
            sliderNode.style.transform = 'translateX(0%)'
          }, 2000)
        }
      }
    }, 2000)
  }, 4000)
})()