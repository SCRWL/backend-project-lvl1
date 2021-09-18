import gatRandomInRange from '../utils.js';
import engine from '../index.js';

const operators = ['+', '*', '-'];
const textRules = 'What is the result of the expression?';

const getCalculate = (x, y, operator) => {
  switch (operator) {
    case '+': return x + y;
    case '*': return x * y;
    case '-': return x - y;
    default: throw new Error(`I don't know what is it: ${operator}'`);
  }
};
const generateRoundData = () => {
  const x = gatRandomInRange(0, 100);
  const y = gatRandomInRange(0, 10);
  const randomOperator = operators[gatRandomInRange(0, operators.length - 1)];
  const question = `${x} ${randomOperator} ${y}`;
  return [question, String(getCalculate(x, y, randomOperator))];
};
export default () => engine(textRules, generateRoundData);
