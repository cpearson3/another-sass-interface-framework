'use strict';


// Directives
var Navbar = require('./directives/Navbar'),
    ListLink = require('./directives/ListLink'),
    NavbarDropdown = require('./directives/NavbarDropdown'),
    Modal = require('./directives/Modal'),
    DateTime = require('./directives/DateTime'),
    ImageBox = require('./directives/ImageBox'),
    Button = require('./directives/Button'),
    Slideout = require('./directives/Slideout'),
    DropdownButton = require('./directives/DropdownButton');

// App module
var bootsmooth = angular.module('bootsmooth', []);

bootsmooth.directive('navbar', Navbar)
.directive('listLink',ListLink)
.directive('navbarDropdown', NavbarDropdown)
.directive('modalDialog', Modal)
.directive('dateTime', ['$interval', DateTime])
.directive('imageBox', ImageBox)
.directive('btn',Button)
.directive('slideout', Slideout)
.directive('btnDropdown', DropdownButton);

module.exports = bootsmooth;