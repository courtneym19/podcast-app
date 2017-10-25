angular
  .module('podcastApp')
  .controller('HomeCtrl', function($scope, $rootScope, Auth, EpisodePlayer, Episode){
    $scope.EpisodePlayer = EpisodePlayer;
    $scope.episodes = Episode.getEpisodes();
    
  })
