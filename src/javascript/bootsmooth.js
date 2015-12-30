'use strict';


// Directives
var Navbar = require('./directives/Navbar'),
    NavbarLink = require('./directives/NavbarLink'),
    Modal = require('./directives/Modal'),
    DateTime = require('./directives/DateTime'),
    ImageBox = require('./directives/ImageBox'),
    Button = require('./directives/Button');

// App module
var bootsmooth = angular.module('bootsmooth', []);

bootsmooth.directive('navbar', Navbar)
.directive('navbarLink',NavbarLink)
.directive('modalDialog', Modal)
.directive('dateTime', ['$interval', DateTime])
.directive('imageBox', ImageBox)
.directive('btn',Button);

module.exports = bootsmooth;