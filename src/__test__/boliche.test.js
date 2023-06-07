const Boliche = require('../models/boliche');

describe("Boliche class", () => {
    const bolicheInstance = new Boliche();


    test('function fill', () => { 
        bolicheInstance.fill();
        expect(bolicheInstance.throws.length).toBe(10);
     })

     test('function score', () => { 
        expect(typeof bolicheInstance.score()).toBe("number");
      })
});