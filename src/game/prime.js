import gatRandomInRange from '../utils.js';
import playGame from '../index.js';

const textRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRoundData = () => {
  const question = gatRandomInRange(2, 100);
  const answer = (isPrime(question)) ? 'yes' : 'no';
  return [question, answer];
};
export default () => playGame(textRules, generateRoundData);
