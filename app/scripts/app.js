'use strict';

angular.module('yakApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new', {
        templateUrl: 'views/new-article.html',
        controller: 'NewArticleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
