var imgFirst = $('.images > .first')
var imgLast = $('.images > .last')
var navFirst = $('.nav > .first')
var navLast = $('.nav > .last')



function slideNext(){
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

}

function slidePrev(){
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

}


$('.next').click(function () {
  slideNext()
});

$('.prev').click(function () {
  slidePrev()
});

$(document).keydown(function( event ) {
  if ( event.which == 37 ) {
    slidePrev()
    event.preventDefault()
 }
 if (event.which == 39)
    slideNext()
    event.preventDefault()
});

$('.nav > i').click(function () {
  var imgActive = $('.images > .active')
  var navActive = $('.nav > i.active')

  var index = $(this).index();
  console.log(index, typeof index)
  imgActive.removeClass('active')
  navActive.removeClass('active')
  if (index == 0){
    imgFirst.addClass('active')
    navFirst.addClass('active')
  } else if (index == 3){
    imgLast.addClass('active')
    navLast.addClass('active')
  } else if (index == 1){
    imgFirst.next().addClass('active')
    navFirst.next().addClass('active')
  } else if (index == 2){
    imgLast.prev().addClass('active')
    navLast.prev().addClass('active')
  }
});
