$( document ).ready( function() {
	$( ".owl-carousel" ).owlCarousel({

		loop: true,
		margin: 40,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			}
		}

	});
})