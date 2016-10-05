angular.module('devMtIn', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: './views/home.html'
  })

  .state('friends', {
    url: '/friends',
    templateUrl: './views/friends.html'
  })

  .state('landing', {
    url: '/landing',
    templateUrl: './views/landing.html'
  })

  .state('update', {
    url: '/update',
    templateUrl: './views/update.html'
  });

  $urlRouterProvider.otherwise('/');

});
