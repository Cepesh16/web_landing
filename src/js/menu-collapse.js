$ ( document ).ready( function() {

	$( '.menu-icon' ).click( function() {
		$( 'nav' ).slideToggle( 500 );
		// $( 'ul.menu' ).css({
		// 	// 'display' : 'flex',
		// 	// 'flex-direction' : 'column'
		// })
		if ( $( '.menu-icon' ).html() == '<i class="fas fa-bars"></i>') {
			$( this ).html( '<i class="fas fa-times"></i>' );
		} else {
			$( this ).html( '<i class="fas fa-bars"></i>' );
		}
	})

});