$(function(){
  window.addEventListener('scroll', function(){
      const header =document.querySelector('header');
      header.classList.toggle("sticky", window.scrollY > 0);
  })
//   back-to-top start
$('.back-to-top').click(function(){
    $('html,body').animate({scrollTop:0},1000);
})
$(window).scroll(function(){
    var scrolling =$(this).scrollTop();

    if(scrolling>300){
        $('.back-to-top').fadeIn(500);
    }
    else{
        $('.back-to-top').fadeOut(500); 
    }
})
//   back-to-top end

})