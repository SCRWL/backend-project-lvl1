import {
  randomNum, plus, multipl, minus,
} from '../others.js';

const calc = () => {
  const operators = ['+', '*', '-'];
  const x = randomNum(100);
  const y = randomNum(10);
  const randOp = operators[randomNum(3)];
  const question = `${x} ${randOp} ${y}`;
  switch (randOp) {
    case '+':
      return [question, plus(x, y)];
    case '*':
      return [question, multipl(x, y)];
    default:
      return [question, minus(x, y)];
  }
};
export default calc;
