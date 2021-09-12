import { randomNum } from '../others.js';

const evenOrNot = () => {
  const randomInt = randomNum(100);
  const rightAnswer = (randomInt % 2 !== 0) ? 'no' : 'yes';
  return [randomInt, rightAnswer];
};
export default evenOrNot;
