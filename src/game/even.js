import gatRandomInRange from '../utils.js';
import playGame from '../index.js';

const textRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateRoundData = () => {
  const question = gatRandomInRange(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
export default () => playGame(textRules, generateRoundData);
