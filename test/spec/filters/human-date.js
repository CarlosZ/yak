'use strict';

describe('Filter: humanDate', function () {

  // load the filter's module
  beforeEach(module('yakApp'));

  // initialize a new instance of the filter before each test
  var humanDate;
  beforeEach(inject(function ($filter) {
    humanDate = $filter('humanDate');
  }));

  it('should return the input prefixed with "humanDate filter:"', function () {
    var text = 'angularjs';
    expect(humanDate(text)).toBe('humanDate filter: ' + text);
  });

});
