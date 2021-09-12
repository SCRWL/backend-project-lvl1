import { randomNum } from '../others.js';

const isPrime = () => {
  const question = randomNum(99) + 1;
  let answer = 'yes';
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      answer = 'no';
      break;
    }
  }
  return [question, answer];
};
export default isPrime;
