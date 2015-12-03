module.exports = function($scope) {
  $scope.menu = "";

  $scope.elements = [
    {
      clickName: 'announcements',
      name: 'Ogłoszenia',
      className: 'home-target-head announcements-bckgrd',
      fontAwe: 'fa fa-exclamation-triangle'
    },
    {
      clickName: 'news',
      name: 'Aktualności',
      className: 'home-target-head news-bckgrd',
      fontAwe: 'fa fa-list-alt'
    },
    {
      clickName: 'yourprofile',
      name: 'Twój Profil',
      className: 'home-target-head profile-bckgrd',
      fontAwe: 'fa fa-user'
    },
    {
      clickName: 'employees',
      name: 'Pracownicy',
      className: 'home-target-head team-bckgrd',
      fontAwe: 'fa fa-users'
    },
    {
      clickName: 'download',
      name: 'Do pobrania',
      className: 'home-target-head download-bckgrd',
      fontAwe: 'fa fa-download'
    },
    {
      clickName: 'calendar',
      name: 'Kalendarz',
      className: 'home-target-head calendar-bckgrd',
      fontAwe: 'fa fa-birthday-cake'
    },
    {
      clickName: "",
      name: 'Główny widok',
      className: 'home-target-head go-main-page',
      fontAwe: 'fa fa-home'
    }
  ];


  $scope.isWhat = function(what){
    $scope.menu = what;
    console.log("kliknieto " + what);
  };
};