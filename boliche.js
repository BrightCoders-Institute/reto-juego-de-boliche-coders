class JuegoDeBoliche {
  constructor() {
    this.strike = false;
    this.spare = false;
    this.turnos = 10;
    this.pinos = 10;
    this.throws = [];
  }

  fill() {
    for (let i = 0; i < 10; i++) {
      this.throws.push(new Throw());
    }
  }

  game() {
    this.throws.map((item, i) => {
      if (
        item.firstThrowValue + item.secondThrowValue === 10 &&
        item.secondThrowValue !== 0
      ) {
        //Spare
        if (i < 9) {
          item.totalRound =
            item.totalThrows + this.throws[i + 1].firstThrowValue;
        } else {
          //4 //3 //3-0
          item.thirdThrow = Math.floor(Math.random() * (10 - 0 - 0 + 1) - 0);
          item.totalRound = item.totalThrows + item.thirdThrow;
        }
      } else if (item.firstThrowValue === 10) {
        //Strike
        if (i < 9) {
          item.totalRound = item.totalThrows + this.throws[i + 1].totalThrows;
        } else {
          //10 //0 //0-10
          item.thirdThrow = Math.floor(Math.random() * (10 - 0 - 0 + 1) - 0);
          item.totalRound = item.totalThrows + item.thirdThrow;
        }
      } else {
        if (i < 9) {
          item.totalRound = item.totalThrows;
        }
      }
    });
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
game.game();

game.throws.map((t) => {
  console.log(t);
});

// for(let i = 0; i < 10; i++) {
//   const exa = new Throw();
//   if(i === 9) {
//     exa.thirdThrow = Math.floor((Math.random() * (10 - 0 + 1) - 0))
//   }
//   console.log(exa);
// }
