angular
  .module('podcastApp')
  .controller('AuthCtrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth){
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}}

    var loginObj = firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error);
    });
    $scope.SignIn = function(event) {
      event.preventDefault();
      var username = $scope.user.email;
      var password = $scope.user.password;

      loginObj.$login('password', {
        email: username,
        password: password
      })
      .then(function(user) {
        console.log('Authentication successful');
      }, function(error) {
        console.log('Authentication failure');
      });
    }
  }])
