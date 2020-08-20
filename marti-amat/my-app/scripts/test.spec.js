const { TestScheduler } = require("jest");

TestScheduler('Math.sqrt', () => {
    expect(Math.sqrt(9)).toBe(3);
})