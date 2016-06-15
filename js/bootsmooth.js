// bootsmooth.js
// depends on jQuery

var $navigation = require('components/navigation');

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

	// initialize default options, can be overridden
	$bs.init();
})();
