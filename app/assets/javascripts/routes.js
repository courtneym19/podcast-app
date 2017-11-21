angular
  .module('podcastApp')
  .config(["$stateProvider", "$routeProvider", "$urlRouterProvider", function($stateProvider, $routeProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      })
      .state('archives', {
        url: '/archives',
        templateUrl: 'views/archives.html'
      })
      // .state('login', {
      //   url: '/login',
      //   templateUrl: 'views/login.html',
      //   controller: 'AuthCtrl',
      //   onEnter: function(Auth, $state){
      //     Auth.currentUser().then(function(){
      //       $state.go('home')
      //     })
      //   }
      // })
      // .state('register', {
      //   url: '/register',
      //   templateUrl: 'views/register.html',
      //   controller: 'AuthCtrl',
      //   onEnter: function(Auth, $state){
      //     Auth.currentUser().then(function(){
      //       $state.go('home')
      //     })
      //   }
      // })
      // .state('episode', {
      //   url: '',
      //   templateUrl: '',
      //   controller: 'EpisodeCtrl'
      // })
    $urlRouterProvider.otherwise('/home')
  }])
