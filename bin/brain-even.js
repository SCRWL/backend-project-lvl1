#!/usr/bin/env node
import * as game from '../src/cli.js';

const OddsOrNot = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNum}`);
    const answer = game.cin('Your answer: ');
    if ((randomNum % 2 === 0 && answer === 'yes') || (randomNum % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${(randomNum % 2 !== 0) ? 'no' : 'yes'}'.`;
    }
  }
  return `Congratulations, ${name}!`;
};

game.Start();
const userName = game.cin('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log(OddsOrNot(userName));
