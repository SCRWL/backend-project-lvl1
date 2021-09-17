import randomNum from '../utils.js';
import core from '../index.js';

const operators = ['+', '*', '-'];
const textRules = 'What is the result of the expression?';

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+': return x + y;
    case '*': return x * y;
    case '-': return x - y;
    default: return null;
  }
};
const rules = () => {
  const x = randomNum(0, 100);
  const y = randomNum(0, 10);
  const randOp = operators[randomNum(0, operators.length - 1)];
  const question = `${x} ${randOp} ${y}`;
  return [question, String(calculate(x, y, randOp))];
};
export default () => core(textRules, rules);
