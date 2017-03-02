// bootsmooth.js
// depends on jQuery

// import components

import { Navigation } from './modules/navigation';

// Bootsmooth class
class BootsmoothApp {
	
	constructor(opts = {}) {
		
		// set options
		this.opts = opts ? opts : {
			mobileWidth: 600
		};

		// initialize navs
		this.navigation = new Navigation();
	}
	
};

window.onload = function() {
	// create new Bootsmooth app 
	let $bs = new BootsmoothApp();
	
	window.$bs = $bs;
}