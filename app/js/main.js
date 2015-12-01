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

  angular.module('SampleApp', ['ngRoute', 'ngAnimate', 'lbServices', 'angularUtils.directives.dirPagination', 'xeditable', 'base64'])

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
        .when("/profile", {
          templateUrl: "./partials/yourprofile.html",
          controller: "EmployeesController"
        })
        // .when("/profile", {
        //   templateUrl: "./partials/login-panel.html",
        //   controller: "LoginController",
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

  // ///////////////////////////////////////////////////////////////////////
   .config(function(LoopBackResourceProvider) {
     // Change the URL where to access the LoopBack REST API server
     LoopBackResourceProvider.setUrlBase('http://localhost:3003/api');
   })
  // ///////////////////////////////////////////////////////////////////////

  //Load controller
  .controller('MainViewController', ['$scope', mainviewCtrl])
  .controller('CalendarController', ['$scope', calendarCtrl])
  .controller('EmployeesController', ['$scope', employeesCtrl])
  .controller('NewsController', ['$scope', 'News', 'Container', newsCtrl ])
  .controller('AnnouncementsController', ['$scope', 'Announcements', announcementsCtrl])
  .controller('DownloadController', ['$scope', 'Downloads', downloadCtrl])
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
