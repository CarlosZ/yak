'use strict';

angular.module('yakApp')
  .controller('NewArticleCtrl', function ($scope) {
    $scope.article = {
      tags: []
    };
    var articleStore = $.indexedDB("yakDb").objectStore("article");
    function persist(article) {
      articleStore
        .add(article)
        .done(function(result, event) {
          console.log("result %o", result);
          console.log("event %o", event);
        })
        .fail(function(error, event) {
          console.log("error %o", error);
          console.log("event %o", event);
        });
    }

    $scope.addTag = function() {
      $scope.article.tags = $scope.article.tags || [];
      $scope.article.tags.push($scope.newTag);
      $scope.newTag = "";
    };
    $scope.save = function() {
      $scope.article.createDate = $scope.article.updateDate = Date.now();
      // validate($scope.article);
      persist($scope.article);
      console.log("saving article: ");
      console.dir($scope.article);
    };
    $scope.discard = function() {
      $scope.article = {
        tags: []
      };
      // hide();
      console.log("discarding article: ");
    };
  });
