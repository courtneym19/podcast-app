var app = angular.module('podcastApp');

app.controller('EpisodeCtrl', ['$scope', '$http', 'EpisodePlayer', 'Episode',
  function($scope, $http, EpisodePlayer, Episode) {
  $scope.EpisodePlayer = EpisodePlayer;

  $scope.episodes = Episode.getEpisodes();


}]);
