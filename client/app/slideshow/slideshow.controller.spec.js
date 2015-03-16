'use strict';

describe('Controller: SlideshowCtrl', function () {

  // load the controller's module
  beforeEach(module('tasDickesBeeApp'));

  var SlideshowCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlideshowCtrl = $controller('SlideshowCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
