$(document).ready(function () {
   //initialize swiper when document ready
   var mySwiper = new Swiper ('.swiper-container', {
     // Optional parameters
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
   })
 });


$(window).scroll(function(event) {
  didScroll = true;
});
setIntervall(function() {
  if (didScroll) {
    hasSrolled();
    didScroll = false;
  }
}, 250
});
function hasSrolled() {
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight =$('main-header').outerHeight();
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop — st) <= delta)
  return;
  if (st > lastScrollTop && st > navbarHeight) {
    $(‘header’).removeClass(‘nav-down’).addClass(‘nav-up’);
} else {
  // Scroll Up
  // If did not scroll past the document (possible on mac)...
  if(st + $(window).height() < $(document).height()) {
    $(‘header’).removeClass(‘nav-up’).addClass(‘nav-down’);
  }
  }

}
