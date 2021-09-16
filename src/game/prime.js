import randomNum from '../utils.js';

const checkPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const isPrime = () => {
  const question = randomNum(2, 100);
  const answer = checkPrime(question);
  return [question, answer];
};
export default isPrime;
