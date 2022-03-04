

let menu = document.querySelector('.menu');
let humburger = document.querySelector('.humburger');

humburger.addEventListener('click', ()=>{
  menu.classList.toggle('change');
  humburger.classList.toggle('open') 

})


 $(document).ready(function(){
    $('.title').slick({    
      infinite: true, 
      dots: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows : true,
      prevArrow: '#prev',
      nextArrow: '#next' , 
      autoplay: true,
      autoplaySpeed : 1000,
    });
  });
 

  


  


  $(document).on('click', 'a[href^=".hero"]', function (event) {
    event.preventDefault();
  
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });


$(document).on('click', 'a[href^=".about"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});


$(document).on('click', 'a[href^=".proj"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

$(document).on('click', 'a[href^=".services"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});




$(document).on('click', 'a[href^=".state"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});



$(document).on('click', 'a[href^=".detail"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});





  
