'use strict';

angular.module('yakApp')
  .directive('mdEditor', function () {
    return {
      template: '',
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, ngModel) {
        if (!ngModel) {
          return;
        }
        $(element).markdown();
      }
    };
  });
