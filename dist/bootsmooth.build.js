(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _navigation = require('./modules/navigation');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // bootsmooth.js
// depends on jQuery

// import components

// Bootsmooth class
var BootsmoothApp = function BootsmoothApp() {
	var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	_classCallCheck(this, BootsmoothApp);

	// set options
	this.opts = opts ? opts : {
		mobileWidth: 600
	};

	// initialize navs
	this.navigation = new _navigation.Navigation();
};

;

window.onload = function () {
	// create new Bootsmooth app 
	var $bs = new BootsmoothApp();

	window.$bs = $bs;
};

},{"./modules/navigation":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// navigation module
/* global $ */

var Navigation = exports.Navigation = function Navigation() {
	var p_width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 600;

	_classCallCheck(this, Navigation);

	var mobileWidth = p_width;

	// cache nav elemenets
	this.elements = $('[data-nav-toggle]');

	// initialize nav toggles
	this.elements.click(function (e) {

		var target = $(this).attr('data-nav-toggle');

		// do not toggle on large screens
		if (window.innerWidth <= mobileWidth) {
			$(target).slideToggle();
		}
	});

	// handle resize event 
	$(window).resize(function () {
		if (window.innerWidth > mobileWidth) {
			// show first ul child (the main menu)
			$('.nav ul:nth-child(1)').show();
		}
	});
};

},{}]},{},[1]);
