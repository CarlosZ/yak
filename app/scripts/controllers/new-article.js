'use strict';

angular.module('yakApp')
  .controller('NewArticleCtrl', function ($scope, articleService) {
    $scope.addTag = function() {
      $scope.article.tags = $scope.article.tags || [];
      $scope.article.tags.push($scope.newTag);
      $scope.newTag = "";
    };
    $scope.removeTag = function(tag) {
      var i = $scope.article.tags.indexOf(tag);
      $scope.article.tags.splice(i, 1);
    };

    $scope.save = function() {
      articleService
        .save($scope.article)
        .done(function(result, event) {
          console.log("result %o", result);
          console.log("event %o", event);
        })
        .fail(function(error, event) {
          console.log("error %o", error);
          console.log("event %o", event);
        });
    };
  });
