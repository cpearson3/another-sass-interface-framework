// side navigation module
/* global $ */

export class SideNavigation {
	
	constructor() {

		// cache nav toggle elemenets
		this.toggles = $('[data-side-nav-toggle]');
		this.closeToggles = $('[data-side-nav-close]');
		
		 // define nav toggle callbacks
		this.toggles.on('click', this.toggle);
		this.closeToggles.on('click', this.close);

	}
	
	toggle(e) {
		var target = $(this).attr('data-side-nav-toggle');
		var targetEl = $(target);

		$('.modal-overlay').fadeToggle();
		
		var enterClass = 'animated slideout-open-animation';
		var exitClass = 'animated slideout-close-animation';
		
		if (targetEl.hasClass('toggled')) {
			targetEl.removeClass('toggled');
			targetEl.removeClass(enterClass);
			targetEl.addClass(exitClass);
			$('body').css('overflow','auto');
		} else {
			targetEl.show();
			targetEl.addClass('toggled');
			targetEl.removeClass(exitClass);
			targetEl.addClass(enterClass);
			$('body').css('overflow','hidden');
		}

	}
	
	close(e) {
		var target = $(this).attr('data-side-nav-close');
		var targetEl = $(target);

		$('.modal-overlay').fadeOut();
		var enterClass = 'animated slideout-open-animation';
		var exitClass = 'animated slideout-close-animation';
		targetEl.removeClass('toggled');
		targetEl.removeClass(enterClass);
		targetEl.addClass(exitClass);
		$('body').css('overflow','auto');
	}
	
}