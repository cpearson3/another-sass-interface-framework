// navigation module
// requires jquery
module.exports = function () {
	var $bs = window.$bs || {};

	// nav toggle callback
	$bs.toggleNavMenu = function(selector) {
		if (window.innerWidth < this.opts.mobileWidth) {
			$(selector).slideToggle();
		}
	};

	// handle resize event 
	$(window).resize(function() {
		if (window.innerWidth > $bs.opts.mobileWidth) {
			// show first ul child (the main menu)
			$('.bs-nav ul:nth-child(1)').show();
		}
	});

}