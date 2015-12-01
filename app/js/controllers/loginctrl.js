module.exports = function($scope, $location, $rootScope) {
$scope.employees = employees;

$scope.login = true;
  $scope.logged = function() {
    return $scope.login;
  };

  $scope.loggedIn = function(umail, upassword) {
    console.log(umail, upassword);
    employees.forEach(function(el) {
      if (el.mail === umail && el.password === upassword) {
        $scope.login = true;
        console.log('sukces');
        confirm('Pomyślnie zalogowano');
      };
    });

    // else if (admin mail i admin password)
      // } 
      // else {
      //   $scope.login = false;
      //   console.log('pudło');
      //   alert('Login i/lub hasło są niepoprawne');
      //   continue;
      // }
  //   });
  };
};
// var employees = [
//   {
//     id: 15,
//     name: 'Aneta',
//     position: 'Intern',
//     projectName: 'Noname',
//     positionWeight: 13,
//     mail: 'aneta@altimi.com',
//     phone1: '',
//     phone2: '722 363 724',
//     img: './img/temp_employees/profile.jpg',
//     password: 'aneta'
//   },
//   {
//     id: 16,
//     name: 'Admin',
//     position: 'Admin',
//     projectName: '',
//     positionWeight: 13,
//     mail: 'admin@altimi.com',
//     phone1: '',
//     phone2: '722 363 724',
//     img: './img/temp_employees/profile.jpg',
//     password: 'admin'
//   },
//   {
//     id: 17,
//     name: 'Aneta',
//     position: 'Intern',
//     projectName: 'Noname',
//     positionWeight: 13,
//     mail: 'adrian@altimi.com',
//     phone1: '',
//     phone2: '722 363 724',
//     img: './img/temp_employees/profile.jpg',
//     password: 'adrian'
//   }];

  
  
// module.exports = function($scope, $http, $window) {
//   $scope.loginError = false;
//   $scope.login = function () {
//     $scope.loginError = false;
//     $http.post('/auth/login', {mail: $scope.mail, password: $scope.password})
//       .success(function (response) {
//         $window.location='/';
//       })
//       .error(function (err, status) {
//         $scope.username = '';
//         $scope.password = '';
//         $scope.loginError = true;
//       })
//     };
//   };