import * as cli from './cli.js';
import even from './game/even.js';
import calc from './game/calc.js';
import gcd from './game/gcd.js';
import progres from './game/progress.js';
import isPrime from './game/prime.js';

export const startGame = (game) => {
  if (game === 'brain-even') {
    return even();
  }
  if (game === 'brain-calc') {
    return calc();
  }
  if (game === 'brain-gcd') {
    return gcd();
  }
  if (game === 'brain-progression') {
    return progres();
  }
  if (game === 'brain-prime') {
    return isPrime();
  }
  return 'Error';
};

export const CorrectAnswer = (gameArr) => {
  const question = gameArr[0];
  const answer = gameArr[1];
  console.log(`Question: ${question}`);
  const userInput = cli.cin('Your answer: ');
  if (answer === userInput) {
    return 'Correct!';
  }
  return `'${userInput}' is wrong answer ;(. Correct answer was '${answer}'.`;
};

export const threeAnswers = (gameName, name) => {
  for (let i = 0; i < 3; i += 1) {
    const check = CorrectAnswer(startGame(gameName));
    if (check !== 'Correct!') {
      return `${check}\nLet's try again, ${name}!`;
    }
    console.log(check);
  }
  return cli.win(name);
};
