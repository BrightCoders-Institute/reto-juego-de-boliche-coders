const Throw = require("./throw");

module.exports = class JuegoDeBoliche {
  constructor() {
    this.throws = [];
  }

  fill() {
    for (let i = 0; i < 10; i++) {
      this.throws.push(new Throw());
    }
  }

  score() {
    let totalScore = 0;

    this.throws.forEach((item, index) => {
      if (index < 9) {
        if (
          //Strike
          item.firstThrowValue === 10 &&
          item.secondThrowValue === 0
        ) {
          if (this.throws[index + 1].totalRound === 10) {
            totalScore += 20 + this.throws[index + 2].firstThrowValue;
          } else {
            totalScore += 10 + this.throws[index + 1].totalThrows;
          }
        } else if (item.totalThrows === 10) {
          totalScore += 10 + this.throws[index + 1].firstThrowValue;
        } else {
          totalScore += item.totalThrows;
        }
      } else {
        if (item.totalRound === 10) {
          item.thirdThrow = Math.floor(Math.random() * (10 - 0 - 0 + 1) - 0);
          totalScore +=
            10 + item.firstThrowValue + item.secondThrowValue + item.thirdThrow;
        } else if (item.totalThrows === 10) {
          item.thirdThrow = Math.floor(Math.random() * (10 - 0 - 0 + 1) - 0);
          totalScore += 10 + item.thirdThrow;
        } else {
          totalScore += item.totalThrows;
        }
      }
      item.totalRound = totalScore;
    });
    return totalScore;
  }
};
