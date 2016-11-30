'use strict';

describe('Service: roverData', function () {

  // load the service's module
  beforeEach(module('capstoneFinalApp'));

  // instantiate service
  var roverData;
  beforeEach(inject(function (_roverData_) {
    roverData = _roverData_;
  }));

  it('should do something', function () {
    expect(!!roverData).toBe(true);
  });

});
