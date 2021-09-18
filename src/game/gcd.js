import gatRandomInRange from '../utils.js';
import engine from '../index.js';

const textRules = 'Find the greatest common divisor of given numbers.';

const findGCD = (x, y) => {
  if (y > x) return findGCD(y, x);
  if (!y) return x;
  return findGCD(y, x % y);
};

const generateRoundData = () => {
  const a = gatRandomInRange(1, 100);
  const b = gatRandomInRange(1, 50);
  const question = `${a} ${b}`;
  const answer = findGCD(a, b);
  return [question, String(answer)];
};
export default () => engine(textRules, generateRoundData);
