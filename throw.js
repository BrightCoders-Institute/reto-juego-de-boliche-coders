module.exports = class Throw {
  constructor() {
    this.firstThrowValue = Math.floor(Math.random() * (10 - 0 + 1) - 0);
    this.secondThrowValue = Math.floor(Math.random() * (10 - this.firstThrowValue - 0 + 1) - 0);
    this.thirdThrowValue = 0;
    this.totalRound = 0;
    this.totalThrows = this.firstThrowValue + this.secondThrowValue;
  }

  thirdThrow() {
    this.thirdThrowValue = Math.floor(Math.random() * (10 - 0 + 1) - 0);
  }

  setTotalRound(total) {
    this.totalRound = total;
  }
};
