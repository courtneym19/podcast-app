angular
  .module('podcastApp')
  .controller('EpisodeCtrl', ["$scope", "$http", "Auth", "EpisodePlayer", "Episode", function($scope, $http, Auth, EpisodePlayer, Episode){
    $scope.EpisodePlayer = EpisodePlayer;
    $scope.episodes = Episode.getEpisodes();

  }])
