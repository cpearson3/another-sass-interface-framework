// bootsmooth.js

import $ from '../node_modules/jquery/dist/jquery.min';

window.$ = $;
window.jQuery = $;

// import components

import { Navigation } from './modules/navigation';
import { SideNavigation } from './modules/side-navigation';
import { Modal } from './modules/modal';

// Bootsmooth class
class BootsmoothApp {
	
	constructor(opts = {}) {
		
		// set options
		this.opts = opts ? opts : {
			mobileWidth: 600
		};

		// initialize navs
		this.navigation = new Navigation();
		this.sideNavigation = new SideNavigation();
		this.modal = new Modal();
	}
	
};

$(document).ready(function () {
	// create new Bootsmooth app 
	let $bs = new BootsmoothApp();
	
	window.$bs = $bs;
});