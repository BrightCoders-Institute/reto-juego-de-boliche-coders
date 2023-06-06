class JuegoDeBoliche {
  constructor(){
    this.strike = false;
    this.spare = false;
    this.turnos = 10;
    this.pinos = 10;
    this.throws = [];
  }

  fill () {
    for(let i = 0; i < 10; i++) {
      this.throws.push(new Throw());
    }
  }

  game () {
    this.throws.map((item, i) => {
      if(item.firstThrowValue + item.secondThrowValue === 10) {
        item.totalRound = firstThrowValue + throws[i+1].totalThrows;
      }

      if(item.firstThrowValue === 10){
        item.totalRound = totalThrows + throws[i+1].totalThrows;
      }
    })
  }
}

class Throw {
  constructor () {
    this.firstThrowValue = this.firstThrow();
    this.secondThrowValue = this.secondThrow();
    this.thirdThrow = 0;
    this.totalRound = 0;
    this.totalThrows = this.firstThrowValue + this.secondThrowValue;
  }

  firstThrow () { 
    return Math.floor((Math.random() * (10 - 0 + 1) - 0))
  }

  secondThrow () {
    return Math.floor((Math.random() * ((10 - this.firstThrowValue) - 0 + 1) - 0))
  }
}

const game = new JuegoDeBoliche();
game.fill();
game.isStrike();
// console.log(game.throws);

// for(let i = 0; i < 10; i++) {
//   const exa = new Throw();
//   if(i === 9) {
//     exa.thirdThrow = Math.floor((Math.random() * (10 - 0 + 1) - 0))
//   }
//   console.log(exa);
// }


