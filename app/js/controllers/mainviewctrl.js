module.exports = function($scope) {
  $scope.menu = "";

  // $scope.$watch('menu', function(newValue, oldValue){
  //   console.log(newValue);
  //   console.log(oldValue);
  // });
  $scope.elements = [
    {
      clickName: 'announcements',
      name: 'Announcements',
      className: 'home-target-head announcements-bckgrd',
      fontAwe: 'fa fa-exclamation-triangle'
    },
    {
      clickName: 'news',
      name: 'News',
      className: 'home-target-head news-bckgrd',
      fontAwe: 'fa fa-list-alt'
    },
    {
      clickName: 'yourprofile',
      name: 'Your Profile',
      className: 'home-target-head profile-bckgrd',
      fontAwe: 'fa fa-user'
    },
    {
      clickName: 'employees',
      name: 'Our Team',
      className: 'home-target-head team-bckgrd',
      fontAwe: 'fa fa-users'
    },
    {
      clickName: 'download',
      name: 'Download',
      className: 'home-target-head download-bckgrd',
      fontAwe: 'fa fa-download'
    },
    {
      clickName: 'calendar',
      name: 'Calendar',
      className: 'home-target-head calendar-bckgrd',
      fontAwe: 'fa fa-birthday-cake'
    },
    {
      clickName: "",
      name: 'Main Page',
      className: 'home-target-head go-main-page',
      fontAwe: 'fa fa-home'
    }
  ];


  $scope.isWhat = function(what){
    $scope.menu = what;
    console.log("kliknieto " + what);
  };
};