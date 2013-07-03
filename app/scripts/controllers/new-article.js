'use strict';

angular.module('yakApp')
  .controller('NewArticleCtrl', function ($scope, $routeParams, $location, articleService, alertsService) {
    if ($routeParams.articleId) {
      var articleKey = parseInt($routeParams.articleId);
      articleService
        .get(articleKey)
        .done(function(article) {
          $scope.$apply(function() {
            $scope.article = article;
            $scope.key = articleKey;
          });
        });
    }

    $scope.addTag = function() {
      $scope.article.tags = $scope.article.tags || [];
      $scope.article.tags.push($scope.newTag);
      $scope.newTag = "";
      $scope.articleForm.$setDirty();
    };

    $scope.removeTag = function(tag) {
      var i = $scope.article.tags.indexOf(tag);
      $scope.article.tags.splice(i, 1);
      $scope.articleForm.$setDirty();
    };

    $scope.save = function() {
      var articlePromise;
      if ($scope.key) {
        articlePromise = articleService.update($scope.key, $scope.article);
      } else {
        articlePromise = articleService.save($scope.article);
      }

      articlePromise
        .done(function(articleKey, event) {
          alertsService
            .addTimedAlert("Article successfuly saved.", "success")
            .then(function() {
              $location.path("/" + articleKey);
            });
        })
        .fail(function(error, event) {
          if (error) {
            alertsService
              .addTimedAlert("An error occurred trying to save the article. [" + error.name + "]", "error");
          }
        });
    };

    $scope.discard = function() {
      $scope.articleForm.$setPristine();
      if ($scope.key) {
        $location.path("/" + $scope.key);
      }
    };
  });
