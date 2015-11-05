module.exports = function($scope) {
  $scope.employees = employees;

  $scope.popupvisible = false;
  $scope.showcard = {};
  $scope.click = 0;

  $scope.toggle = function(obj, val) {
    $scope.popupvisible = !$scope.popupvisible;
    $scope.showcard = obj;
    $scope.click = val;
    console.log($scope.click);
  };
};
  
 

var employees = [
{
  id: 1,
  name: 'Tomasz Podoba',
  position: 'Prezes',
  mail: 'tomasz.podoba@altimi.com',
  phone1: ' +48 71 786 08 03',
  img: './img/temp_employees/Tomasz.jpg'
},
{
 id: 2,
  name: 'Aleksander Lewicki',
  position: 'Prezes',
  mail: 'aleksander.lewicki@altimi.com',
  phone1: '+48 71 786 08 02',
  img: './img/temp_employees/Aleksander.jpg'
},
{
  id: 3,
  name: 'Monika Zmuda',
  position: 'Dyrektor Operacyjny',
  mail: ' monika.zmuda@altimi.com',
  phone1: '+48 71 786 08 49',
  phone2: '+48 605 733 990',
  img: './img/temp_employees/Monika.jpg'
},
{
  id: 4,
  name: 'Beata Ocetkiewicz',
  position: 'Delivery IT Manager',
  mail: 'beata.ocetkiewicz@altimi.com',
  phone1: '+48 71 786 08 20',
  phone2: ' +48 796 696 445',
  img: './img/temp_employees/Beata.jpg'
},
{
  id: 5,
  name: 'Małgorzata Pędziwiatr-Wagan',
  position: 'Kierownik Działu Rekrutacji',
  mail: ' malgorzata.pedziwiatr@altimi.com',
  phone1: '+48 71 786 08 00',
  img: './img/temp_employees/Malgorzata.jpg'
}];