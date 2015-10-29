(function () {

  'use strict';

  require('angular');
  require('angular-route');
  require('angular-animate');
  
  var mainCtrl = require('./controllers/mainctrl');
  var calendarCtrl = require('./controllers/calendarctrl');

  angular.module('SampleApp', ['ngRoute', 'ngAnimate'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./partials/partial1.html",
          controller: "MainController"
        })
        .when("/calendar", { 
          templateUrl: "./partials/calendar.html",
          controller: "CalendarController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ])

  //Load controller
  .controller('MainController', ['$scope', mainCtrl])
  .controller('CalendarController', ['$scope', calendarCtrl]);

}());