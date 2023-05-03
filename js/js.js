$(document).ready(function() {

	$(window).on('load scroll resize', function() {
		if( $(this).scrollTop() > 0 ) {
			$('header').addClass('header2');	
		} else {
				$('header').removeClass('header2');	
			}
	});

});