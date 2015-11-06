module.exports = function($scope){
  $scope.obj = {};

  $scope.readMore = function(nobj){
    nobj.pullDown = 1;
  };
  $scope.readLess = function(nobj){
    nobj.pullDown = 0;
  };

  $scope.allNews = [
  {
    id: 1,
    date: '2014.11.03',
    tittle: 'Drużyna Opery',
    description: "Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
    img: ['./img/temp_news/druzyna.jpg'],
    pullDown: 0
  },
  {
    id: 2,
    date: '2014.09.03',
    tittle: 'Nowy Project Manager',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
    img: ['./img/temp_news/Tomasz.jpg'],
    pullDown: 0
  },
  {
    id: 3,
    date: '2014.07.03',
    tittle: 'Już za tydzień!!!',
    description: "Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
    img: ['./img/temp_news/ZAPROSZENIE2.jpg'],
    pullDown: 0
  },
  {
    id: 4,
    date: '2013.12.30',
    tittle: 'SYLWESTER!',
    description: "Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
    img: ['./img/temp_news/sylwester.jpg'],
    pullDown: 0
  },
  {
    id: 5,
    date: '2015.02.03',
    tittle: 'Drużyna Opery',
    description: "Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
    img: ['./img/temp_news/druzyna.jpg'],
    pullDown: 0
  },
  {
    id: 6,
    date: '2015.03.03',
    tittle: 'Nowy Project Manager',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
    img: ['./img/temp_news/Tomasz.jpg'],
    pullDown: 0
  },
  {
    id: 7,
    date: '2015.01.03',
    tittle: 'Już za tydzień!!!',
    description: "Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
    img: ['./img/temp_news/ZAPROSZENIE2.jpg'],
    pullDown: 0
  },
  {
    id: 8,
    date: '2012.12.30',
    tittle: 'SYLWESTER!',
    description: "Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
    img: ['./img/temp_news/sylwester.jpg'],
    pullDown: 0
  },
  {
    id: 9,
    date: '2013.12.03',
    tittle: 'Drużyna Opery',
    description: "Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
    img: ['./img/temp_news/druzyna.jpg'],
    pullDown: 0
  },
  {
    id: 10,
    date: '2014.11.03',
    tittle: 'Nowy Project Manager',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
    img: ['./img/temp_news/Tomasz.jpg'],
    pullDown: 0
  },
  {
    id: 11,
    date: '2015.08.03',
    tittle: 'Już za tydzień!!!',
    description: "Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
    img: ['./img/temp_news/ZAPROSZENIE2.jpg'],
    pullDown: 0
  },
  {
    id: 12,
    date: '2015.07.06',
    tittle: 'Koniec Wakacji! Do roboty nieroby!',
    description: "Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae! \n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi similique, recusandae quisquam, nulla minus ex officiis eveniet repellat! Quidem modi, quaerat. Quia modi quam libero labore sapiente, minima vitae!",
    img: ['./img/temp_news/sylwester.jpg'],
    pullDown: 0
  }
  ];
};