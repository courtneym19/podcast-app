angular
  .module('podcastApp')
  .controller('EpisodeCtrl', function($scope, $http, Auth, EpisodePlayer, Episode){
    $scope.EpisodePlayer = EpisodePlayer;
    $scope.episodes = Episode.getEpisodes();

  })
