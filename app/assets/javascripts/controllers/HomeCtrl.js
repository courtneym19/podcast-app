angular
  .module('podcastApp')
  .controller('HomeCtrl', ["$scope", "$rootScope", "Auth", "EpisodePlayer", "Episode", "Post", function($scope, $rootScope, Auth, EpisodePlayer, Episode, Post){
    $scope.EpisodePlayer = EpisodePlayer;
    $scope.episodes = Episode.getEpisodes();

    $scope.posts = Post.all;

  }])
