'use strict';

angular.module('yakApp')
  .controller('ArticleCtrl', function ($scope, $routeParams, articleService) {
    var articleKey = parseInt($routeParams.articleId);
    articleService
      .get(articleKey)
      .done(function(result) {
        $scope.article = result;
        $scope.key = articleKey;
        $scope.$apply();
      });
  });
