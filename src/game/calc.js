import randomNum from '../utils.js';

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return String(x + y);
    case '*':
      return String(x * y);
    case '-':
      return String(x - y);
    default:
      return 'Error';
  }
};

const calcCore = () => {
  const operators = ['+', '*', '-'];
  const x = randomNum(0, 100);
  const y = randomNum(0, 10);
  const randOp = operators[randomNum(0, 2)];
  const question = `${x} ${randOp} ${y}`;
  return [question, calculate(x, y, randOp)];
};
export default calcCore;
