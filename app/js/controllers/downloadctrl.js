module.exports = function($scope) {
  $scope.tekst = "down";

  $scope.items = items;
};

var items = [
{
  id: 1,
  name: 'Plik pierwszy',
  description: 'Plik potrzebny do tego i tego.',
  link: './download/plik1'
},
{
  id: 2,
  name: 'Plik drugi',
  description: 'Wzór dokumentu na to i tamto.',
  link: './download/plik2'
},
{
  id: 3,
  name: 'Plik trzeci',
  description: 'Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda!',
  link: './download/plik3'
}
];