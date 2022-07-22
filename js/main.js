// Banner section owl craousal

$('#banner .owl-carousel').owlCarousel({
				loop:true,
				nav:true,
				autoplay:true,
				autoplayTimeout:3000,
				autoplayHoverPause:true	,
				responsive:{
				0:{
				items:1
				},
				600:{
				items:1
				},
				1000:{
				items:1
				}
				}
				})


// testimonial section owl craousal



$('#testimonial .owl-carousel').owlCarousel({
				loop:true,
				nav:true,
				dots: false,
				margin: 50,
				autoplay:true,
				autoplayTimeout:3000,
				autoplayHoverPause:true	,
				responsive:{
				0:{
				items:1
				},
				600:{
				items:3
				},
				1000:{
				items:3
				}
				}
				})
