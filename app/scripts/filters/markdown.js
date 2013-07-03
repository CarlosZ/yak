'use strict';

angular.module('yakApp')
  .filter('markdown', function () {
    return function (input) {
      return markdown.toHTML(input || '');
    };
  });
