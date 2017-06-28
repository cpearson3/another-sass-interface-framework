// modal module
/* global $ */

export class Modal {
	
	constructor() {

		// cache nav toggle elemenets
		this.modalToggles = $('[data-modal-toggle]');

		 // initialize nav toggles
		this.modalToggles.click( function(e) {
			var target = $(this).attr('data-modal-toggle');
			console.log(target);
            $(target).fadeToggle();
            $('.modal-overlay').fadeToggle();
		});
	}
	
}