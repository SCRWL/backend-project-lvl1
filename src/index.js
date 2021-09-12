import * as cli from './cli.js';
import * as games from './games.js';

export const startGame = (game) => {
  if (game === 'brain-even') {
    return games.evenOrNot();
  }
  if (game === 'brain-calc') {
    return games.calc();
  }
  if (game === 'brain-gcd') {
    return games.gcd();
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
      return check;
    }
    console.log(check);
  }
  return cli.win(name);
};
