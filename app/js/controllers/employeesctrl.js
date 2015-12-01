module.exports = function($scope, $filter, $http) {
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
  $scope.closePopup = function($event) {
      $event.stopPropagation();
  };
  // $scope.zmienna = "";
  $scope.tab = 1;
  $scope.switchTab = function(setTab){
    // $scope.zmienna = what;
    $scope.tab = setTab;
    console.log($scope.tab);
  };
  $scope.isSelected = function(checkTab) {
    return $scope.tab === checkTab;
  };

  $scope.sortData = "";
  $scope.sortReverse = false;

  $scope.projectNames = projectNames;
  $scope.showProject = function(employee) {
    var selected = [];
    if(employee.projectName){
      selected = $filter('filter')($scope.projectNames, {value: $scope.employee.projectName});
    }
    // return selected.length ? selected[0].text: 'Not set';
  };


  $scope.addEmployee = function(){
    $scope.inserted = {
      id: $scope.employees.length+1,
      img: '',
      name: '',
      position: '',
      projectName: '',
      // positionWeight '', też admin dodaje?
      mail: '',
      phone1: '',
      phone2: '',
      isNew: true
    };
    $scope.employees.push($scope.inserted);
  };
  $scope.removeEmployee = function(index) {
    $scope.employees.splice(index, 1);
    confirm("Jesteś pewien, że chcesz usunąć wybranego pracownika wraz ze wszystkimi danymi?");
  };
  $scope.saveEmployee = function(data, id) {
    angular.extend(data, {id: id});
    return $http.post('/saveEmployee', data);
  };

  $scope.updateChanges = function(data) {
    return $http.post('/updateChanges', {id: $scope.employee.id, name: data});
  };
};


var employees = [
{
  id: 1,
  name: 'Tomasz Podoba',
  position: 'Prezes',
  projectName: '',
  positionWeight: '00zero',
  mail: 'tomasz.podoba@altimi.com',
  phone1: '(71) 786 08 03',
  img: './img/temp_employees/Tomasz.jpg'
},
{
 id: 2,
  name: 'Aleksander Lewicki',
  position: 'Prezes',
  projectName: '',
  positionWeight: '00zero',
  mail: 'aleksander.lewicki@altimi.com',
  phone1: '(71) 786 08 02',
  img: './img/temp_employees/Aleksander.jpg'
},
{
  id: 3,
  name: 'Monika Zmuda',
  position: 'Dyrektor Operacyjny',
  projectName: '',
  positionWeight: '01one',
  mail: 'monika.zmuda@altimi.com',
  phone1: '(71) 786 08 49',
  phone2: '605 733 990',
  img: './img/temp_employees/Monika.jpg'
},
{
  id: 4,
  name: 'Beata Ocetkiewicz',
  position: 'Delivery IT Manager',
  projectName: '',
  positionWeight: '03three',
  mail: 'beata.ocetkiewicz@altimi.com',
  phone1: '(71) 786 08 20',
  phone2: '796 696 445',
  img: './img/temp_employees/Beata.jpg'
},
{
  id: 5,
  name: 'Małgorzata Pędziwiatr-Wagan',
  position: 'Kierownik Działu Rekrutacji',
  projectName: '',
  positionWeight: '03three',
  mail: 'malgorzata.pedziwiatr@altimi.com',
  phone1: '(71) 786 08 00',
  img: './img/temp_employees/Malgorzata.jpg'
},
{
  id: 6,
  name: 'Marcin Słowiński',
  position: 'Project Manager',
  projectName: '',
  positionWeight: '02two',
  mail: 'marcin.slowinski@altimi.com',
  phone1: '',
  phone2: '534 190 316',
  img: './img/temp_employees/profile.jpg'
},
{
  id: 7,
  name: 'Tomasz Odrzywołek',
  position: 'Project Manager',
  projectName: '',
  positionWeight: '02two',
  mail: 'tomasz.odrzywolek@altimi.com',
  phone1: '',
  phone2: '507 664 444',
  img: './img/temp_employees/profile.jpg'
},
{
  id: 8,
  name: 'Marlena Popardowska',
  position: 'Dyrektor Finansowy',
  projectName: '',
  positionWeight: '06six',
  mail: 'marlena.popardowska@altimi.com',
  phone1: '(71) 786 08 30',
  phone2: '722 363 701',
  img: './img/temp_employees/profile.jpg'
},
{
  id: 9,
  name: 'Dorota Pazdro',
  position: 'Dyrektor Handlowy',
  projectName: '',
  positionWeight: '04four',
  mail: 'dorota.pazdro@altimi.com',
  phone1: '(71) 786 08 16',
  phone2: '606 707 232',
  img: './img/temp_employees/profile.jpg'
},
{
  id: 10,
  name: 'Kamil Gąciarek',
  position: 'Administrator IT',
  projectName: '',
  positionWeight: '12twelve',
  mail: 'kamil.gaciarek@altimi.com',
  phone1: '',
  phone2: '534 184 222',
  img: './img/temp_employees/profile.jpg'
},
{
  id: 11,
  name: 'Agneszka Mastej',
  position: 'Asystentka Biura',
  projectName: '',
  positionWeight: '09nine',
  mail: 'agnieszka.mastej@altimi.com',
  phone1: '(71) 78 60 825',
  phone2: '782 591 073',
  img: './img/temp_employees/profile.jpg'
},
{
  id: 12,
  name: 'Ewa Kasperowicz',
  position: 'Specjalista ds. Kadr i Płac',
  projectName: '',
  positionWeight: '05five',
  mail: 'ewa.kasperowicz@altimi.com',
  phone1: '(71) 786 08 42',
  phone2: '722 363 718',
  img: './img/temp_employees/profile.jpg'
},
{
  id: 13,
  name: 'Tomasz Żygadło',
  position: 'Developer',
  projectName: 'GEA',
  positionWeight: '13thirteen',
  mail: 'tomasz.zygadlo@altimi.com',
  phone1: '',
  phone2: '722 363 728',
  img: './img/temp_employees/TomaszZygadlo.jpg'
},
{
  id: 14,
  name: 'Radosław Zieliński',
  position: '.NET Developer',
  projectName: 'Lorenz',
  positionWeight: '13thirteen',
  mail: 'radoslaw.zielinski@altimi.com',
  phone1: '',
  phone2: '722 363 724',
  img: './img/temp_employees/profile.jpg'
},
{
  id: 15,
  name: 'Jan Kowalski',
  position: 'Developer',
  projectName: 'Akademia',
  positionWeight: '13thirteen',
  mail: 'jan.kowalski@altimi.com',
  phone1: '',
  phone2: '722 363 724',
  img: './img/temp_employees/profile.jpg',
  password: 'altimi'
}];

var projectNames = [
{
  value: 1,
  text: 'AC Automation'
},
{
  value: 2,
  text: 'Akademia'
},
{
  value: 3,
  text: 'APG/SGA'
},
{
  value: 4,
  text: 'Birlasoft'
},
{
  value: 5,
  text: 'GEA'
},
{
  value: 6,
  text: 'Jetshop'
},
{
  value: 7,
  text: 'Lorenz'
},
{
  value: 8,
  text: 'Mappan'
},
{
  value: 9,
  text: 'Opera Software'
},
{
  value: 10,
  text: 'Polsource'
},
{
  value: 11,
  text: 'ADB'
},
{
  value: 12,
  text: 'Casino Saga Agency'
},
{
  value: 13,
  text: 'TIDAL'
},
{
  value: 14,
  text: 'Zenterio AB'
}];
