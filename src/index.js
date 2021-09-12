import * as cli from './cli.js';

export const evenOrNot = () => {
  const randomNum = cli.randomNum(100);
  const rightAnswer = (randomNum % 2 !== 0) ? 'no' : 'yes';
  return [randomNum, rightAnswer];
};

export const calc = () => {
  const operators = ['+', '*', '-'];
  const x = cli.randomNum(100);
  const y = cli.randomNum(10);
  const randOp = operators[cli.randomNum(3)];
  const question = `${x} ${randOp} ${y}`;
  switch (randOp) {
    case '+':
      return [question, cli.plus(x, y)];
    case '*':
      return [question, cli.multipl(x, y)];
    default:
      return [question, cli.minus(x, y)];
  }
};

export const startGame = (game) => {
  if (game === 'brain-even') {
    return evenOrNot();
  } if (game === 'brain-calc') {
    return calc();
  }
  return 'idk';
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
