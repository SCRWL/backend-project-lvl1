import { randomNum } from '../others.js';

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};

const gcd = () => {
  const a = randomNum(100);
  const b = randomNum(50);
  const question = `${a} ${b}`;
  const answer = NOD(a, b);
  return [question, String(answer)];
};
export default gcd;
