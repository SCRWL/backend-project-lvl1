import randomNum from '../utils.js';

const checkGCD = (x, y) => {
  if (y > x) return checkGCD(y, x);
  if (!y) return x;
  return checkGCD(y, x % y);
};

const gcd = () => {
  const a = randomNum(1, 100);
  const b = randomNum(1, 50);
  const question = `${a} ${b}`;
  const answer = checkGCD(a, b);
  return [question, String(answer)];
};
export default gcd;
