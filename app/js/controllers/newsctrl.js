module.exports = function($scope, News){
  $scope.obj = {};
  $scope.allNews = News.find();

  $scope.addAnotherNews = function(newtitle, newimg, newdescription, newdate){
    News.create({title: newtitle, description: newdescription, img: newimg, date: newdate, pullDown: 0});
    alert("Dodałeś z powodzeniem aktualność o tytule: " + newtitle);
  };
  $scope.removeNews = function(ajdi){
    confirm("Czy na pewno chcesz usunąć tą aktualność?");
    News.deleteById({ id: ajdi })
  .$promise
  .then(function() { console.log('deleted'); alert('deleted'); });
  };

  $scope.readMore = function(nobj){
    nobj.pullDown = 1;
  };
  $scope.readLess = function(nobj){
    nobj.pullDown = 0;
  };

  // $scope.allNews = [
  // {
  //   id: 1,
  //   date: '2014.11.03',
  //   title: 'Drużyna Opery',
  //   description: 'Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!',
  //   img: ['./img/temp_news/druzyna.jpg'],
  //   pullDown: 0
  // },
  // {
  //   id: 2,
  //   date: '2014.09.03',
  //   title: 'Nowy Project Manager',
  //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
  //   img: ['./img/temp_news/Tomasz.jpg'],
  //   pullDown: 0
  // },
  // {
  //   id: 3,
  //   date: '2014.07.03',
  //   title: 'Już za tydzień!!!',
  //   description: "Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
  //   img: ['./img/temp_news/ZAPROSZENIE2.jpg'],
  //   pullDown: 0
  // },
  // {
  //   id: 4,
  //   date: '2013.12.30',
  //   title: 'SYLWESTER!',
  //   description: "Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
  //   img: ['./img/temp_news/sylwester.jpg'],
  //   pullDown: 0
  // },
  // {
  //   id: 5,
  //   date: '2015.02.03',
  //   title: 'Drużyna Opery',
  //   description: "Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
  //   img: ['./img/temp_news/druzyna.jpg'],
  //   pullDown: 0
  // },
  // {
  //   id: 6,
  //   date: '2015.03.03',
  //   title: 'Nowy Project Manager',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!',
  //   img: ['./img/temp_news/Tomasz.jpg'],
  //   pullDown: 0
  // },
  // {
  //   id: 7,
  //   date: '2015.01.03',
  //   title: 'Już za tydzień!!!',
  //   description: 'Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!',
  //   img: ['./img/temp_news/ZAPROSZENIE2.jpg'],
  //   pullDown: 0
  // },
  // {
  //   id: 8,
  //   date: '2012.12.30',
  //   title: 'SYLWESTER!',
  //   description: 'Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!',
  //   img: ['./img/temp_news/sylwester.jpg'],
  //   pullDown: 0
  // },
  // {
  //   id: 9,
  //   date: '2013.12.03',
  //   title: 'Drużyna Opery',
  //   description: 'Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!',
  //   img: ['./img/temp_news/druzyna.jpg'],
  //   pullDown: 0
  // },
  // {
  //   id: 10,
  //   date: '2014.11.03',
  //   title: 'Nowy Project Manager',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!',
  //   img: ['./img/temp_news/Tomasz.jpg'],
  //   pullDown: 0
  // }];
};