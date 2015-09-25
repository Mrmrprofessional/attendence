var attendence = angular.module('attendence', ['ui.router']);

attendence.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('signIn', {
    url: "/signIn",
    templateUrl: "partials/signIn.html",
    controller: 'SignInCtrl'
  });

  $stateProvider.state('here', {
    url: "/here",
    templateUrl: "partials/here.html",
    controller: 'HereCtrl'
  });
});
