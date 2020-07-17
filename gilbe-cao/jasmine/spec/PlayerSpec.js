describe("Player", function () {
  let personConfig;
  let fullName;
  let player;

  beforeEach(function () {
    personConfig = {
      name: "Alex",
      lastName: "Zander",
      trophies: { gold: 2, silver: 3, bronze: 0 },
    };

    fullName = "Alex Zander"; // personConfig.name + ' ' + personConfig.lastName
    player = new Player(
      personConfig.name,
      personConfig.trophies,
      personConfig.lastName
    );
  });

  it("should have a name", function () {
    expect(player.name).toBe(personConfig.name);
  });

  xit("should count the number of trophies", function () {
    expect(player.countTrophies()).toBe(6);
  });

  it("should have a full name", function () {
    expect(player.fullName()).toBe(fullName);
  });
});

// Blinker start
let initialState = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

let secondState = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
// Blinker end

// Toad start
let initialState = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

let secondState = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
// Toad end

expect(life.next(initialState)).toBe(secondState);
