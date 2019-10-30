$( document ).ready( function() {

  $(".button").click(function() {

  	$( '.button[filter]' ).attr( 'val', 'off' );
  	$( this ).attr( 'val', 'on' );
  	var filter = $( this ).attr( 'filter' );

    if ( $( this ).attr( "filter" ) && $( this ).attr( "filter" ) !== "all" ) {
		
		$( ".filter > div" ).hide( 500 );
	    $.when( $( ".filter > div*[ filter !='" + filter + "' ]" ).hide( 500 ) ).then( function() {
		      	( $( ".filter > div*[ filter ='" + filter + "' ]" ).show(  500 ) );

	  	});

    } else {            
      	$.when( $( ".filter > div" ).hide( 500 ) ).then( function() {
        	 $( ".filter > div" ).show( 500 );
        });
	      
    } // if else

  }) // button.click

}); // document.ready
