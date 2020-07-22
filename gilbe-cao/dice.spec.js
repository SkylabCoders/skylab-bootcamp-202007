describe('DiceGame', function () {
  let game;
  let heroDetailComponent;

  beforeEach(function () {
    game = new DiceGame();
    heroDetailComponent = new HeroDetailComponent();
  });

  it('should create', function () {
    expect(game).toBeTruthy();
  });

  it('should roll dices', function () {
    expect(game.play().hasOwnProperty('firstDice')).toEqual(true);
    expect(game.play().hasOwnProperty('secondDice')).toEqual(true);
    expect(game.play()).toBeDefined();
  });
});