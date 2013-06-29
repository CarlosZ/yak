'use strict';

describe('Directive: mdEditor', function () {
  beforeEach(module('yakApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<md-editor></md-editor>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the mdEditor directive');
  }));
});
