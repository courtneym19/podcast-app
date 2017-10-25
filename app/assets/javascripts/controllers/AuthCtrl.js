angular
  .module('podcastApp')
  .controller('AuthCtrl', function($scope, User, Auth, $state){
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}}

    $scope.User = User;

    $scope.register = function(){
      Auth.register(User.user, config).then(function(user){
        alert("Thanks for signing up, " + user.username);
        $state.go('home');
      }, function(response){
        alert(response.data.error)
      });
    };

    $scope.login = function(){
      Auth.login(User.user, config).then(function(user){
        alert("You're all signed in, " + user.username);
        $state.go('home');
      }, function(response){
        alert(response.data.error)
      });
    }
  })
