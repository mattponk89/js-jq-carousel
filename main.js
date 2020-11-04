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

//click next
$('.next').click(slideNext)

//click prev
$('.prev').click(slidePrev)


// gestione pressione tasti destra e sinistra della tastiera
$(document).keydown(function( event ) {
  if ( event.which == 37 ) {
    slidePrev()
    event.preventDefault()
 }
 if (event.which == 39)
    slideNext()
    event.preventDefault()
});


// gestione click sui pallini dello slider per il jump
$('.nav > i').click(function () {

  var imgActive = $('.images > .active')
  var navActive = $('.nav > i.active')

  imgActive.removeClass('active')
  navActive.removeClass('active')

  var index = $(this).index();

  imgList.eq(index).addClass( "active" )
  navList.eq(index).addClass( "active" )


});
