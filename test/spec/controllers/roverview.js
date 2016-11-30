'use strict';

describe('Controller: RoverviewCtrl', function () {

  // load the controller's module
  beforeEach(module('capstoneFinalApp'));

  var RoverviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoverviewCtrl = $controller('RoverviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RoverviewCtrl.awesomeThings.length).toBe(3);
  });
});
