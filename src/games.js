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
