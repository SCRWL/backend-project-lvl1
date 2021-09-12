import { randomNum } from '../others.js';

const progres = () => {
  const first = randomNum(50);
  const step = randomNum(9) + 1;
  const arr = [first];
  for (let i = 0; i < 9; i += 1) {
    arr.push(arr[i] + step);
  }
  const miss = randomNum(arr.length);
  let question = '';
  let answer = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (i === miss) {
      question += '.. ';
      answer += arr[i];
    } else {
      question += (`${arr[i]} `);
    }
  }
  return [question, answer];
};
export default progres;
