import randomNum from '../utils.js';

const checkEven = (number) => ((number % 2 !== 0) ? 'no' : 'yes');

const evenOrNot = () => {
  const randomInt = randomNum(1, 100);
  const rightAnswer = checkEven(randomInt);
  return [randomInt, rightAnswer];
};
export default evenOrNot;
