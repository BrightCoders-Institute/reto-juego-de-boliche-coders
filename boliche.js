class JuegoDeBoliche {
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
        if (item.totalRound === 10 && item.firstThrowValue === 10 && item.secondThrowValue === 0) {
          if (this.throws[index + 1].totalRound === 10) {
            totalScore += 20 + this.throws[index + 2].firstThrowValue;
          } else {
            totalScore += 10 + this.throws[index + 1].totalThrows;
          }
        } else if (item.totalThrows === 10){
            totalScore += 10 + this.throws[index + 1].firstThrowValue;
        } else {
            totalScore += item.totalThrows;
        }
        } else {
          if (item.totalRound === 10 ) {
            item.thirdThrow = Math.floor(Math.random() * (10 - 0 - 0 + 1) - 0);
            totalScore += 10 + item.firstThrowValue + item.secondThrowValue + item.thirdThrow;
          } else if (item.totalThrows === 10) {
            item.thirdThrow = Math.floor(Math.random() * (10 - 0 - 0 + 1) - 0);
            totalScore += 10 + item.thirdThrow;
          } else {
            totalScore += item.totalThrows;
          }    }
    });
    return totalScore;    
}
}

class Throw {
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
}

const game = new JuegoDeBoliche();
game.fill();
game.score();

game.throws.forEach((t, index) => {
  console.log(`Throw ${index + 1}`);
  console.log (t);
});

const totalScore = game.score();
console.log('Total Score:', totalScore);

// for(let i = 0; i < 10; i++) {
//   const exa = new Throw();
//   if(i === 9) {
//     exa.thirdThrow = Math.floor((Math.random() * (10 - 0 + 1) - 0))
//   }
//   console.log(exa);
// }
