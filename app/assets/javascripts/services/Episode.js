var app = angular.module('podcastApp');

app.factory('Episode', [ function(){
  var Episode = {};

  var episodes = [
    { title: 'Another Title', number: '3', date: '8/15/17', description: 'Description #3', audioUrl: '/assets/sounds/ep1'},
    { title: 'Some Other Title', number: '2', date: '8/8/17', description: 'Best episode ever', audioUrl: '/assets/sounds/ep2'},
    { title: 'Pilot Episode', number: '1', date: '8/1/17', description: 'Soul Spectrum pilot episode', audioUrl: 'https://drive.google.com/uc?export=download&id=0B76fdfZeVDaBQ25VZ2loNkJBd1k'}
  ];

  Episode.getEpisodes = function(){
    return episodes;
  }

  return Episode;
}]);
