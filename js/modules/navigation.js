// navigation module
/* global $ */

export class Navigation {
	
	constructor(p_width = 600) {
		
		let mobileWidth = p_width;
		
		// cache nav elemenets
		this.elements = $('[data-nav-toggle]');

		 // initialize nav toggles
		this.elements.click( function(e) {
			
			var target = $(this).attr('data-nav-toggle');
			
			// do not toggle on large screens
			if (window.innerWidth <= mobileWidth) {
				$(target).slideToggle();
			}
		} );
	
		// handle resize event 
		$(window).resize(function() {
			if (window.innerWidth > mobileWidth) {
				// show first ul child (the main menu)
				$('.nav ul:nth-child(1)').show();
			}
		});
	}
	
}