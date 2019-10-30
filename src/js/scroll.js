$ ( document ).ready( function() {
	// smooth scroll menu anchors
	$( 'ul.menu a[href^="#"' ).click( function() {
		var target = $( this ).attr( 'href' );
		$( 'html, body' ).animate({
			scrollTop: $( target ).offset().top
		}, 500 );
		$( 'ul.menu a[href^="#"' ).css({ 'color' : '#212121' });
		$( this ).css({ 'color' : '#00897b' });
		return false;
	})

	// button to top scroll
	$( window ).scroll( function() {
		if( $( this ).scrollTop() > 100 )
			$( '#toTop' ).fadeIn();
		else
			$( '#toTop' ).fadeOut();
	})

	$( '#toTop' ).click( function() {
		$( 'html, body' ).animate({
			scrollTop: 0
		}, 800 );
	})

});