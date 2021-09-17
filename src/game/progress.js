import randomNum from '../utils.js';
import core from '../index.js';

const textRules = 'What number is missing in the progression?';

const generationProgression = (first, step, length, index) => {
  let string = '';
  for (let i = 0; i < length; i += 1) {
    if (i === index) string += '.. ';
    else string += `${first + step * i} `;
  }
  return string;
};

const rules = () => {
  const first = randomNum(0, 50);
  const step = randomNum(1, 10);
  const length = randomNum(5, 10);
  const missIndex = randomNum(0, length - 1);
  const question = generationProgression(first, step, length, missIndex);
  const answer = String(first + step * missIndex);
  return [question, answer];
};
export default () => core(textRules, rules);
