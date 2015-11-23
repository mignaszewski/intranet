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
  var profileCtrl = require('./controllers/profileCtrl');
  var loginCtrl = require('./controllers/loginCtrl');

  angular.module('SampleApp', ['ngRoute', 'ngAnimate', 'angularUtils.directives.dirPagination'])

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
        // .when("/profile", {
        //   templateUrl: "./partials/yourprofile.html",
        //   controller: "EmployeesController"
        // })
        .when("/profile", {
          templateUrl: "./partials/login-panel.html",
          controller: "LoginController"
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
  .controller('NewsController', ['$scope', newsCtrl])
  .controller('AnnouncementsController', ['$scope', announcementsCtrl])
  .controller('DownloadController', ['$scope', downloadCtrl])
  .controller('ProfileController', ['$scope', profileCtrl])
  .controller('LoginController', ['$scope', loginCtrl])

// Load directive
  .directive('employeeCard', function() {
    return {
      restrict: 'E',
      templateUrl: './partials/employee-card.html'
    };
  });
  

}());