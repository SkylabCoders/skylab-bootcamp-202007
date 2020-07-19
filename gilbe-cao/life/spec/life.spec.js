describe('Life', function () {
  const initialStateIndex = 0;
  const life = new Life();

  it('should create', function () {
    expect(life).toBeTruthy();
  });

  it('should call next without arguments', function () {
    expect(life.next()).toBeTruthy();
  });

  it('should call next with Blinker initial state', function () {
    expect(life.next(lifeStates.blinker[initialStateIndex])).toBe(
      lifeStates.blinker[initialStateIndex++]
    );
  });

  it('should call next with Toad initial state', function () {
    expect(life.next(lifeStates.toad[initialStateIndex])).toBe(
      lifeStates.toad[initialStateIndex++]
    );
  });

  it('should call next with Beacon initial state', function () {
    expect(life.next(lifeStates.beacon[initialStateIndex])).toBe(
      lifeStates.beacon[initialStateIndex++]
    );
  });
});
