describe('Life', function () {
  let life;

  beforeEach(function () {
    life = new Life();
  });

  it('should create', function () {
    expect(life).toBeTruthy();
  });

  it('should remain stable when initialState is null or undefined', function () {
    expect(life.next(undefined)).not.toBeDefined();
    expect(life.next(null)).not.toBeDefined();
    expect(life.next()).not.toBeDefined();
  });

  it('should work with Blinker states', function () {
    expect(life.next(blinker.initialState)).toEqual(blinker.secondState);
  });

  it('should work with Toad states', function () {
    expect(life.next(toad.initialState)).toEqual(toad.secondState);
  });

  it('should work with Beacon states', function () {
    expect(life.next(beacon.initialState)).toEqual(beacon.secondState);
  });

  it('should work with Beacon corner states', function () {
    expect(life.next(beaconCorner.initialState)).toEqual(
      beaconCorner.secondState
    );
  });
});
