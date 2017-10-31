angular
  .module('podcastApp')
  .controller('HomeCtrl', function($scope, $rootScope, Auth, EpisodePlayer, Episode, Post){
    $scope.EpisodePlayer = EpisodePlayer;
    $scope.episodes = Episode.getEpisodes();
    $scope.posts = Post.getPosts();

  })
