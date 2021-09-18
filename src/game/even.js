import gatRandomInRange from '../utils.js';
import engine from '../index.js';

const textRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateRoundData = () => {
  const randomInt = gatRandomInRange(1, 100);
  const rightAnswer = isEven(randomInt) ? 'yes' : 'no';
  return [randomInt, rightAnswer];
};
export default () => engine(textRules, generateRoundData);
