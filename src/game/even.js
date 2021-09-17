import randomNum from '../utils.js';
import core from '../index.js';

const textRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const rules = () => {
  const randomInt = randomNum(1, 100);
  const rightAnswer = isEven(randomInt) ? 'yes' : 'no';
  return [randomInt, rightAnswer];
};
export default () => core(textRules, rules);
