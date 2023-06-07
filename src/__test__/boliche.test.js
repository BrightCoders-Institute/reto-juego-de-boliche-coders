const Boliche = require("../models/boliche");
const Throw = require("../models/throw");

describe("Boliche class", () => {
  const bolicheInstance = new Boliche();

  test("function fill", () => {
    bolicheInstance.fill();
    expect(bolicheInstance.throws.length).toBe(10);
  });

  test("function score", () => {
    expect(typeof bolicheInstance.score()).toBe("number");
  });

  test("throws to be an Array", () => {
    expect(bolicheInstance.throws).toBeInstanceOf(Array);
  });

  test("Each Element of Throws to be an instances of Throw ", () => {
    bolicheInstance.throws.forEach((t) => {
      expect(t).toBeInstanceOf(Throw);
    });
  });
});
