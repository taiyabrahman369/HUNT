$(window).scroll(function(){
  $scrollamout = $(window).scrollTop();
  
  if($scrollamout > 40){
    $(".menu").addClass("sticky")
  }else{
    $(".menu").removeClass("sticky")
  }

  if($scrollamout > 500){
    $(".btop").fadeIn()
  }else{
    $(".btop").fadeOut()
  }
})

$(".btop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})

$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    fade:true,
    prevArrow: '<i class="fa fa-arrow-circle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-circle-right next" aria-hidden="true"></i>',
  });

  $('.venobox').venobox(); 
  

  $('.counter').counterUp({
    delay: 10,
    time: 1000
}); 

$('.service-slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  arrows: true,
  centerMode: true,
  centerPadding:0,
  prevArrow: '<i class="fa fa-angle-up tprev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-down tnext" aria-hidden="true"></i>',
});

$('.testi-slider .left').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding:0,
  prevArrow: '<i class="fa fa-angle-up sprev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-down snext" aria-hidden="true"></i>',
  asNavFor: '.testi-slider .right'
});

$('.testi-slider .right').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // vertical: true,
  // centerMode: true,
  // centerPadding:0,
  fade: true,
  arrows: false,
  asNavFor: '.testi-slider .left'
});