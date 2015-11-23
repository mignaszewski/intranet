module.exports = function($scope, $location, $rootScope) {
$scope.employees = employees;
$scope.login = true;
var employees = [
  {
    id: 15,
    name: 'Jan Kowalski',
    position: 'Developer',
    projectName: 'Noname',
    positionWeight: 13,
    mail: 'jan.kowalski@altimi.com',
    phone1: '',
    phone2: '722 363 724',
    img: './img/temp_employees/profile.jpg',
    password: 'altimi'
  }];

  
  // $scope.logged = function() {
  //   return $scope.login;
  // };

  $scope.submit = function() {
    var mail = $scope.mail;
    var password = $scope.password;
    employees.forEach(function(el) {
      if(el.mail == $scope.mail && el.password == $scope.password) {
        confirm('Pomyślnie zalogowano');
        $scope.login = true;
      } else {
        confirm('Login i/lub hasło są niepoprawne');
        $scope.login = false;
      };
    });
  };
};
