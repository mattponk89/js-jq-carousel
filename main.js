var imgFirst = $('.images > .first')
var imgLast = $('.images > .last')
var navFirst = $('.nav > .first')
var navlast = $('.nav > .last')

$('.next').click(function () {
  var imgActive = $('.images > .active')
  var navActive = $('.nav > i.active')

  imgActive.removeClass('active')
  navActive.removeClass('active')

  if (imgActive.hasClass('last')){
    imgFirst.addClass('active')
    navFirst.addClass('active')
  } else {
    imgActive.next().addClass('active')
    navActive.next().addClass('active')
  }
});

$('.prev').click(function () {
  var imgActive = $('.images > .active')
  var navActive = $('.nav > i.active')

  imgActive.removeClass('active')
  navActive.removeClass('active')

  if (imgActive.hasClass('first')){
    imgLast.addClass('active')
    navLast.addClass('active')
  } else {
    imgActive.prev().addClass('active')
    navActive.prev().addClass('active')
  }
});
