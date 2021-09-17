import randomNum from '../utils.js';
import core from '../index.js';

const textRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const rules = () => {
  const question = randomNum(2, 100);
  const answer = (isPrime(question)) ? 'yes' : 'no';
  return [question, answer];
};
export default () => core(textRules, rules);
