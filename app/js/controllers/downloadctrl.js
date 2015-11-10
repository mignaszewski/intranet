module.exports = function($scope) {
  $scope.tekst = "down";
  $scope.sortKey = '';
  $scope.items = items;
  $scope.reverse = false;

  $scope.sort = function(keyname){
    $scope.sortKey = keyname;
    $scope.reverse = !$scope.reverse;
  };
};

var items = [
{
  id: 2,
  name: 'Plik drugi',
  description: 'Wzór dokumentu na to i tamto. Aspernatur, blanditiis, et.',
  date: '2015.07.04',
  link: './download/plik2'
},
{
  id: 3,
  name: 'Plik trzeci',
  description: 'Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda! Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga.',
  date: '2015.07.13',
  link: './download/plik3'
},
{
  id: 1,
  name: 'Plik czwarty',
  description: 'Plik potrzebny do tego i tego, tego i tego, tamtego i siamtego, hohohoo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga.',
  date: '2015.07.14',
  link: './download/plik1'
},
{
  id: 2,
  name: 'Plik dpioty',
  description: 'Wzór dokumentu na to i tamto. Aspernatur, blanditiis, et.',
  date: '2015.07.17',
  link: './download/plik2'
},
{
  id: 3,
  name: 'Plik szeeeeesc',
  description: 'Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda! Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga.',
  date: '2015.07.19',
  link: './download/plik3'
},
{
  id: 1,
  name: 'Seven nation army',
  description: 'Plik potrzebny do tego i tego, tego i tego, tamtego i siamtego, hohohoo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga. ',
  date: '2015.07.20',
  link: './download/plik1'
},
{
  id: 2,
  name: 'Plik ejt',
  description: 'Wzór dokumentu na to i tamto. Aspernatur, blanditiis, et.',
  date: '2015.07.24',
  link: './download/plik2'
},
{
  id: 3,
  name: 'Plik dziewiaty',
  description: 'Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda! Beatae quia amet illum deserunt dolores atque natus fuga.',
  date: '2015.08.02',
  link: './download/plik3'
},
{
  id: 1,
  name: 'Plik ten',
  description: 'Plik potrzebny do tego i tego, tego i tego, tamtego i siamtego, hohohoo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga.',
  date: '2015.08.03',
  link: './download/plik1'
},
{
  id: 2,
  name: 'Plik ostatni',
  description: 'Wzór dokumentu na to i tamto. Aspernatur, blanditiis, et.',
  date: '2015.08.12',
  link: './download/plik2'
},
{
  id: 3,
  name: 'Pliknajnowszy',
  description: 'Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda! Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga. Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex,',
  date: '2015.08.12',
  link: './download/plik3'
},
{
  id: 1,
  name: 'dokument dwa',
  description: 'Plik potrzebny do tego i tego, tego i tego, tamtego i siamtego, hohohoo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga. Aspernatur, blanditiis, et.',
  date: '2015.08.13',
  link: './download/plik1'
},
{
  id: 2,
  name: 'Dokument szesc',
  description: 'Wzór dokumentu na to i tamto. Aspernatur, blanditiis, et. Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda!',
  date: '2015.08.15',
  link: './download/plik2'
},
{
  id: 3,
  name: 'Plik trzeci',
  description: 'Jeśli potrzebujesz tego, to ten dokument na pewno Ci się przyda! Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga. Jeśli potrzebujesz tego, to ten dokument na pewno Ci się przyda! Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex.',
  date: '2015.08.18',
  link: './download/plik3'
},
{
  id: 1,
  name: 'dokument pierwszy',
  description: 'dokument potrzebny do tego i tego, tego i tego, tamtego i siamtego, hohohoo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga. Aspernatur, blanditiis, et. Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda! Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga.',
  date: '2015.08.20',
  link: './download/plik1'
},
{
  id: 2,
  name: 'Plik drugi',
  description: 'Wzór dokumentu na to i tamto. Aspernatur, blanditiis, et, beatae quia amet illum deserunt dolores atque natus fuga. Aspernatur, blanditiis, et. Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda! Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga.',
  date: '2015.08.20',
  link: './download/plik2'
},
{
  id: 3,
  name: 'dokument trzeci',
  description: 'Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda! Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga, beatae quia amet illum deserunt dolores atque natus fuga. Aspernatur, blanditiis, et. Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda! Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga.',
  date: '2015.08.20',
  link: './download/plik3'
},
{
  id: 1,
  name: 'dokument pierwszy',
  description: 'Plik potrzebny do tego i tego, tego i tego, tamtego i siamtego, hohohoo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga. Aspernatur, blanditiis, et. Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda! Hic architecto autem delectus omnis eveniet consequatur repudiandae.',
  date: '2015.08.23',
  link: './download/plik1'
},
{
  id: 2,
  name: 'dokument drugi',
  description: 'Wzór dokumentu na to i tamto. Aspernatur, blanditiis, et.',
  date: '2015.08.25',
  link: './download/plik2'
},
{
  id: 3,
  name: 'Plik trzeci',
  description: 'Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda! Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex.',
  date: '2015.09.03',
  link: './download/plik3'
},
{
  id: 1,
  name: 'dokument pierwszy',
  description: 'Plik potrzebny do tego i tego, tego i tego, tamtego i siamtego, hohohoo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga.',
  date: '2015.09.05',
  link: './download/plik1'
},
{
  id: 2,
  name: 'drugi',
  description: 'Wzór dokumentu na to i tamto. Aspernatur, blanditiis, et. Aspernatur, blanditiis, et. Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda!',
  date: '2015.09.10',
  link: './download/plik2'
},
{
  id: 3,
  name: 'dokument trzeci',
  description: 'Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda! Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga. Aspernatur, blanditiis, et. Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda!',
  date: '2015.09.12',
  link: './download/plik3'
},
{
  id: 1,
  name: 'dokument pierwszy',
  description: 'Plik potrzebny do tego i tego, tego i tego, tamtego i siamtego, hohohoo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga. Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga, blanditiis, et.',
  date: '2015.09.13',
  link: './download/plik1'
},
{
  id: 2,
  name: 'dokument drugi',
  description: 'Wzór dokumentu na to i tamto. Aspernatur.',
  date: '2015.09.15',
  link: './download/plik2'
},
{
  id: 3,
  name: 'dokument trzeci',
  description: 'Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda! Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga. Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga.',
  date: '2015.09.15',
  link: './download/plik3'
},
{
  id: 1,
  name: 'dokument pierwszy',
  description: 'Plik potrzebny do tego i tego, tego i tego, tamtego i siamtego, hohohoo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic architecto autem delectus omnis eveniet consequatur repudiandae, vel ex, beatae quia amet illum deserunt dolores atque natus fuga. Aspernatur, blanditiis, et. Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda!',
  date: '2015.10.10',
  link: './download/plik1'
},
{
  id: 2,
  name: 'dokument drugi',
  description: 'Wzór dokumentu na to i tamto. Aspernatur, blanditiis, et. vel ex, beatae quia amet illum deserunt dolores atque natus fuga.',
  date: '2015.11.01',
  link: './download/plik2'
},
{
  id: 3,
  name: 'trzeci',
  description: 'Jeśli potrzebujesz tego, to ten plik na pewno Ci się przyda! Hic architecto autem delectus omnis eveniet consequatur repudiandae.',
  date: '2015.11.10',
  link: './download/plik3'
}
];