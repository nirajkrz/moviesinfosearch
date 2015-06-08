/**
 * Created by Niraj_Kumar08 on 1/15/2015.
 */
/*Having IIFE  for all the function helps in avoiding clutter of variable names:--
 An IIFE protects a module’s scope from the environment in which it is placed.
* 1>Being able to place global objects in the local scope provides faster internal lookup, speeds and performance.
* 2>helps with minification optimization
* 3>
* */

'use strict';
    // Declare app level module which depends on filters, and services
    var app= angular.module('moviesDetails', ['ngRoute','myApp.services']);
app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $routeProvider.when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'loginController'
            })
            .when('/home',
            {
                templateUrl: 'partials/home.html',
                controller: 'SearchCtrl'
            })
            .otherwise(
            {
                redirectTo: '/login'
            });
    }]);

