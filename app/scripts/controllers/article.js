'use strict';

angular.module('yakApp')
  .controller('ArticleCtrl', function ($scope) {
    $scope.article = {
      id: 10,
      title: "Some Title",
      content: "**Some Content**",
      tags: ["tag1", "tag2", "tag3"],
      createDate: 1372380625716,
      updateDate: 1372380645461,
    }
  });
