// bootsmooth.js
// depends on jQuery

(function() {

	// declare global bootsmooth object, $bs
	var $bs = window.$bs || {};

  // global options
	$bs.init = function(opts) {
		// set options
		this.opts = opts ? opts : {
			mobileWidth: 568
		};

		// export our global object
		window.$bs = this;
	};

	// nav toggle callback
	$bs.toggleNavMenu = function(selector) {
		if (window.innerWidth < this.opts.mobileWidth) {
			$(selector).slideToggle();
		}
	};

  // handle resize event for nav menu
	$(window).resize(function() {
    if (window.innerWidth > $bs.opts.mobileWidth) {
			// show first ul child (the main menu)
      $('.bs-nav ul:nth-child(1)').show();
    }
  });

  // initialize default options, can be overridden
  $bs.init();
})();
