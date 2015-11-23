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
  $scope.closePopup = function($event) {
      $event.stopPropagation();
  };
};
 

var employees = [
{
  id: 1,
  name: 'Tomasz Podoba',
  position: 'Prezes',
  projectName: '',
  positionWeight: 1,
  mail: 'tomasz.podoba@altimi.com',
  phone1: '(71) 786 08 03',
  img: './img/temp_employees/Tomasz.jpg'
},
{
 id: 2,
  name: 'Aleksander Lewicki',
  position: 'Prezes',
  projectName: '',
  positionWeight: 1,
  mail: 'aleksander.lewicki@altimi.com',
  phone1: '(71) 786 08 02',
  img: './img/temp_employees/Aleksander.jpg'
},
{
  id: 3,
  name: 'Monika Zmuda',
  position: 'Dyrektor Operacyjny',
  projectName: '',
  positionWeight: 2,
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
  positionWeight: 3,
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
  positionWeight: 3,
  mail: 'malgorzata.pedziwiatr@altimi.com',
  phone1: '(71) 786 08 00',
  img: './img/temp_employees/Malgorzata.jpg'
},
{
  id: 6,
  name: 'Marcin Słowiński',
  position: 'Project Manager',
  projectName: '',
  positionWeight: 2,
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
  positionWeight: 2,
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
  positionWeight: 6,
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
  positionWeight: 4,
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
  positionWeight: 12,
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
  positionWeight: 9,
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
  positionWeight: 5,
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
  positionWeight: 13,
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
  positionWeight: 13,
  mail: 'radoslaw.zielinski@altimi.com',
  phone1: '',
  phone2: '722 363 724',
  img: './img/temp_employees/profile.jpg'
},
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