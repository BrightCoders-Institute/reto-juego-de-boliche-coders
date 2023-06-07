const Throw = require("../models/throw");

describe("Throw Class", () => {
  const throwInstance = new Throw();

  test("firstThrowValue is menor o igual que 10", () => {
    expect(throwInstance.firstThrowValue).toBeLessThanOrEqual(10);
  });

  test("firstThrowValue is mayor o igual que 0", () => {
    expect(throwInstance.firstThrowValue).toBeGreaterThanOrEqual(0);
  });

  test("secondThrowValue is menor o igual que (10 - firstThrowValue)", () => {
    expect(throwInstance.secondThrowValue).toBeLessThanOrEqual(
      10 - throwInstance.firstThrowValue
    );
  });

  test("secondThrowValue is mayor o igual que 0", () => {
    expect(throwInstance.secondThrowValue).toBeGreaterThanOrEqual(0);
  });

  test("thirdThrowValue is mayor o igual que 0", () => {
    throwInstance.thirdThrow();
    expect(throwInstance.thirdThrowValue).toBeGreaterThanOrEqual(0);
  });

  test("totalThrows = firstThrowValue + secondThrowValue", () => {
    expect(throwInstance.totalThrows).toBe(
      throwInstance.firstThrowValue + throwInstance.secondThrowValue
    );
  });

  test("totalRound is number", () => {
    expect(typeof throwInstance.totalRound).toBe("number");
  });
});
