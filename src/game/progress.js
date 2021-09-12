import {randomNum} from '../others.js';

const progres = () => {
  const first = randomNum(50);
  const second = first + randomNum(10);
  const arr = [first, second];
  for (let i = 0; i < 8; i += 1) {
    arr.push(arr[i] + arr[i + 1]);
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
