$(function(){

  var numSlides = $('.slide').size(),
      slideWidth = $('.slide').width(),
      numClicks = 0;

  function moveIt() {
    // calculate how far to animate
    var slideDistance = slideWidth * numClicks;
    //animate tray
    $('.tray').animate({right: slideDistance}, 'slow');
  }

  $('.tray').width(slideWidth * numSlides);

  $('.prev, .next').hide();

  //user clicks next
  $('.next').click(function () {
    if (numClicks < numSlides - 1) {
      // increment numClicks
      numClicks += 1;
    } else {
      numClicks = 0;
    }
    moveIt();
  });

  //user clicks prev
  $('.prev').click(function () {
    if (numClicks > 0) {
      // decrement numClicks
      numClicks -= 1;
    } else {
      numClicks = numSlides - 1;
    }
    moveIt();
  });

  $('.frame').hover(function () {
    $('.prev, .next').show();
  }, function() {
    $('.prev, .next').hide();
  });

});