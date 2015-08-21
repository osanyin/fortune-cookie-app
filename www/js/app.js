// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var fortuneCookie = angular.module('fortuneCookie', ['ionic']);

fortuneCookie.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

fortuneCookie.controller('HomeController', ['$scope', 'phraseService', function($scope, phraseService) {
  $scope.setRandomPhrase = function() {
    phraseService.getRandom().then(function(response) {
      $scope.phrase = response.data;
    });
  }
}]);

fortuneCookie.service('phraseService', ['$http', function($http) {
  var apiUrl = 'http://localhost:3000/phrases.json';
  var phraseService = {
    getRandom: function() {
      return $http.get(apiUrl);
    }
  } 

  return phraseService;
}]);