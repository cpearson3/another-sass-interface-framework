// navigation module
// requires jquery
module.exports = function () {
	var $bs = window.$bs || {};

    // initialize nav toggles
	$('[data-nav-toggle]').click(function() {
		var target = $(this).attr('data-nav-toggle');
		// do not toggle on large screens
		if (window.innerWidth <= $bs.opts.mobileWidth) {
			$(target).slideToggle();
		}
	});

	// handle resize event 
	$(window).resize(function() {
		if (window.innerWidth > $bs.opts.mobileWidth) {
			// show first ul child (the main menu)
			$('.nav ul:nth-child(1)').show();
		}
	});
};