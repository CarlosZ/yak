'use strict';

angular.module('yakApp')
  .controller('NewArticleCtrl', function ($scope) {
    $scope.article = {
      tags: []
    };

    $scope.addTag = function() {
      $scope.article.tags = $scope.article.tags || [];
      $scope.article.tags.push($scope.newTag);
      $scope.newTag = "";
    };
    $scope.save = function() {
      $scope.article.createDate = $scope.article.updateDate = Date.now();
      // validate($scope.article);
      // persist($scope.article);
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
