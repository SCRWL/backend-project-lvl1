import gatRandomInRange from '../utils.js';
import playGame from '../index.js';

const textRules = 'What number is missing in the progression?';

const generationProgression = (first, step, length, hiddenIndex) => {
  let string = '';
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) string += '.. ';
    else string += `${first + step * i} `;
  }
  return string;
};

const generateRoundData = () => {
  const first = gatRandomInRange(0, 50);
  const step = gatRandomInRange(1, 10);
  const length = gatRandomInRange(5, 10);
  const hiddenIndex = gatRandomInRange(0, length - 1);
  const question = generationProgression(first, step, length, hiddenIndex);
  const answer = String(first + step * hiddenIndex);
  return [question, answer];
};
export default () => playGame(textRules, generateRoundData);
