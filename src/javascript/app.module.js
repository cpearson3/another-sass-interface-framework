'use strict';

// Angular
var angular = require('angular');
require('angular-route');

// Controllers
var HomeCtrl = require('./controllers/HomeCtrl'),
    ShowcaseCtrl = require('./controllers/ShowcaseCtrl');

// Directives
var Navbar = require('./directives/Navbar'),
    NavbarLink = require('./directives/NavbarLink'),
    Modal = require('./directives/Modal'),
    DateTime = require('./directives/DateTime'),
    ImageBox = require('./directives/ImageBox'),
    Button = require('./directives/Button');

// App module
var app = angular.module('myApp', ['ngRoute']);

app.directive('navbar', Navbar)
.directive('navbarLink',NavbarLink)
.directive('modalDialog', Modal)
.directive('dateTime', ['$interval', DateTime])
.directive('imageBox', ImageBox)
.directive('btn',Button);

// Routes
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/views/pages/home.html',
            controller: HomeCtrl
        }).
        when('/showcase/', {
            templateUrl: '/views/pages/showcase.html',
            controller: ShowcaseCtrl
        }).
        when('/styles/', {
            templateUrl: '/views/pages/styles.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);