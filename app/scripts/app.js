'use strict';

angular.module('yakApp', ['resettableForm'])
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
  })
  .config(function () {
    $.indexedDB("yakDb", {
      "version" : 1,
      "schema" : {
        "1" : function(transaction){
          transaction
            .createObjectStore("article", {
              autoIncrement: true
            }).createIndex("title", {
              unique: true
            }, "titleIdx");
        }
      }
    });
  });
