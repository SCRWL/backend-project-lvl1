import gatRandomInRange from '../utils.js';
import playGame from '../index.js';

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
  const answer = String(findGCD(a, b));
  return [question, answer];
};
export default () => playGame(textRules, generateRoundData);
