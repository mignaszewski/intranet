(function () {

  'use strict';

  require('angular');
  require('angular-route');
  require('angular-animate');
  
  var mainCtrl = require('./controllers/mainctrl');
  var calendarCtrl = require('./controllers/calendarctrl');
  var employeesCtrl = require('./controllers/employeesctrl');

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
        .when("/employees", { 
          templateUrl: "./partials/employees.html",
          controller: "EmployeesController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ])

  //Load controller
  .controller('MainController', ['$scope', mainCtrl])
  .controller('CalendarController', ['$scope', calendarCtrl])
  .controller('EmployeesController', ['$scope', employeesCtrl]);
}());