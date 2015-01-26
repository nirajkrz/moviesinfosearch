/**
 * Created by Niraj_Kumar08 on 1/15/2015.
 */

'use strict';
// Declare app level module which depends on filters, and services
var app= angular.module('moviesDetails', ['ngRoute','myApp.services']);
app.config(['$routeProvider', function($routeProvider) {
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
