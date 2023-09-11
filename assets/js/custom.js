	
/*scrolling banner*/
(function ($) {
  "use strict";

	 $(document).ready(function(){
		 $('.testimonial-carousel' ).owlCarousel({
		    items: 3,
		    nav: true,
		    loop :true,
		   
		    mouseDrag: true,
		    responsiveClass: true,
        autoplay: true,
		    navText : ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
		    responsive: {
		        0:{
		          items: 1
		        },
		        480:{
		          items: 1
		        },
		        767:{
		          items: 2
		        },
		        992:{
		          items: 3
		        },
		        1200:{
		          items: 3
		        }
		    }
		  });

	 });



	$(document).ready(function(){
	    $('.client-carousel').owlCarousel({
	        items: 4,
	        nav: true,
	        loop :true,
	       
	        mouseDrag: true,
	        responsiveClass: true,
          autoplay: true,
	        navText : ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
	        responsive: {
	            0:{
	              items: 1
	            },
	            480:{
	              items: 1
	            },
	            767:{
	              items: 3
	            },
	            992:{
	              items: 3
	            },
	            1200:{
	              items: 5
	            }
	        }
	    });
	});  


	$(document).ready(function(){
	    $('.services-carousel').owlCarousel({
	        items: 4,
	        nav: true,
	        dots: false,
	        loop :true,
	       
	        mouseDrag: true,
	        responsiveClass: true,
	        autoplay: true,
	        autoplayTimeout: 3000,
	        autoplayHoverPause: true,
	        navText : ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
	        responsive: {
	            0:{
	              items: 1
	            },
	            480:{
	              items: 1
	            },
	            767:{
	              items: 2
	            },
	            992:{
	              items: 2
	            },
	            1200:{
	              items: 4
	            }
	        }
	    });
	});  



	
	



	  


})(jQuery); 




// js for map

