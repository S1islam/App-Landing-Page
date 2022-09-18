// WOW animation Plugin
new WOW().init();

// OwlCarousel PlugIn
$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    nav:true,
    dots:true,
    margin:10,
    responsive:{
        600:{
            items:4
        }     
    }
});

// Counterup PlugIn
jQuery(document).ready(function($) {
  $('.counter').counterUp({
    delay: 10,
      time: 1000
        });
  
});



        