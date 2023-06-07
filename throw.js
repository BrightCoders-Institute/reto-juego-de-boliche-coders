module.exports = class Throw {
  constructor() {
    this.firstThrowValue = this.firstThrow();
    this.secondThrowValue = this.secondThrow();
    this.thirdThrow = 0;
    this.totalRound = 0;
    this.totalThrows = this.firstThrowValue + this.secondThrowValue;
  }

  firstThrow() {
    return Math.floor(Math.random() * (10 - 0 + 1) - 0);
  }

  secondThrow() {
    return Math.floor(Math.random() * (10 - this.firstThrowValue - 0 + 1) - 0);
  }
};
