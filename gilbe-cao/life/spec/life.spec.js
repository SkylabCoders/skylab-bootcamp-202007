describe('Life', function () {
  let initialStateIndex;
  let life;

  beforeEach(function () {
    initialStateIndex = 0;
    life = new Life();
  });

  it('should create', function () {
    expect(life).toBeTruthy();
  });

  it('should not call next without initial state', function () {
    expect(life.next()).not.toBeDefined();
  });

  it('should call next with Blinker initial state', function () {
    expect(life.next(lifeStateList.blinker[initialStateIndex])).toEqual(
      lifeStateList.blinker[initialStateIndex + 1]
    );
  });

  it('should call next with Toad initial state', function () {
    expect(life.next(lifeStateList.toad[initialStateIndex])).toEqual(
      lifeStateList.toad[initialStateIndex + 1]
    );
  });

  it('should call next with Beacon initial state', function () {
    expect(life.next(lifeStateList.beacon[initialStateIndex])).toEqual(
      lifeStateList.beacon[initialStateIndex + 1]
    );
  });
});
