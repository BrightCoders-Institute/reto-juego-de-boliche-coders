const JuegoDeBoliche = require("./src/models/boliche");

const game = new JuegoDeBoliche();
game.fill();
game.score();

game.throws.forEach((t, index) => {
  console.log(`Throw ${index + 1}`);
  console.log(t);
});

const totalScore = game.score();
console.log("Total Score:", totalScore);
