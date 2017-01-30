// bootsmooth.js

// depends on jQuery
if (!$ && jQuery) {
	$ = jQuery;
}

// import components
var $navigation = require('./components/navigation.js');

window.onload = function() {

	// declare global bootsmooth object, $bs
	var $bs = window.$bs || {};

	// global options
	$bs.init = function(opts) {
		// set options
		this.opts = opts ? opts : {
			mobileWidth: 600
		};

		// export our global object
		window.$bs = this;
	};
	
	// initialize default options, can be overridden
	$bs.init();
	
	// init components
	$navigation();

};