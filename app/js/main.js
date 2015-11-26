(function () {

  'use strict';

  require('angular');
  require('angular-route');
  require('angular-animate');

  
  var mainviewCtrl = require('./controllers/mainviewctrl');
  var calendarCtrl = require('./controllers/calendarctrl');
  var employeesCtrl = require('./controllers/employeesctrl');
  var newsCtrl = require('./controllers/newsctrl');
  var announcementsCtrl = require('./controllers/announcementsctrl');
  var downloadCtrl = require('./controllers/downloadctrl');

  angular.module('SampleApp', ['ngRoute', 'ngAnimate', 'lbServices', 'angularUtils.directives.dirPagination'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./partials/main_view.html",
          controller: "MainViewController"
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
  .controller('MainViewController', ['$scope', mainviewCtrl])
  .controller('CalendarController', ['$scope', calendarCtrl])
  .controller('EmployeesController', ['$scope', employeesCtrl])
  .controller('NewsController', ['$scope', 'News', 'Container', newsCtrl ])
  .controller('AnnouncementsController', ['$scope', 'Announcements', announcementsCtrl])
  .controller('DownloadController', ['$scope', 'Downloads', downloadCtrl])

// Load directive
  .directive('employeeCard', function() {
    return {
      restrict: 'E',
      templateUrl: './partials/employee-card.html'
    };
  });
  

}());