describe('Life', function () {
  const initialStateIndex = 0;
  const life = new Life();

  it('should create', function () {
    expect(life).toBeTruthy();
  });

  it('should not call next without initial state', function () {
    expect(life.next()).not.toBeDefined();
  });

  fit('should call next with Blinker initial state', function () {
    expect(life.next(lifeStateList.blinker[initialStateIndex])).toBe(
      lifeStateList.blinker[initialStateIndex++]
    );
  });

  it('should call next with Toad initial state', function () {
    expect(life.next(lifeStateList.toad[initialStateIndex])).toBe(
      lifeStateList.toad[initialStateIndex++]
    );
  });

  it('should call next with Beacon initial state', function () {
    expect(life.next(lifeStateList.beacon[initialStateIndex])).toBe(
      lifeStateList.beacon[initialStateIndex++]
    );
  });
});
