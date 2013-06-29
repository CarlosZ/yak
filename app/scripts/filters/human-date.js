'use strict';

angular.module('yakApp')
  .filter('humanDate', function () {
    return function (input) {
      var date = new Date(input);
      return date.toLocaleString();
    };
  });
