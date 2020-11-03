var imgFirst = $('.images > .first')
var imgLast = $('.images > .last')
var navFirst = $('.nav > .first')
var navLast = $('.nav > .last')

var navList = $('.nav > i')
var imgList = $('.images > img')

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
  
  imgActive.removeClass('active')
  navActive.removeClass('active')

  switch (index) {
  case 0:
    imgList.eq(0).addClass( "active" )
    navList.eq(0).addClass( "active" )
    break
  case 1:
    imgList.eq(1).addClass( "active" )
    navList.eq(1).addClass( "active" )
    break
  case 2:
    imgList.eq(2).addClass( "active" )
    navList.eq(2).addClass( "active" )
    break
  case 3:
    imgList.eq(3).addClass( "active" )
    navList.eq(3).addClass( "active" )
    break
}

});
