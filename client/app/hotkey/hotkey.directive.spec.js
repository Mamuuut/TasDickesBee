'use strict';

describe('Directive: hotkey', function () {

  // load the directive's module
  beforeEach(module('tasDickesBeeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hotkey></hotkey>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the hotkey directive');
  }));
});