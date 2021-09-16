import randomNum from '../utils.js';

const generationProgression = () => {
  const first = randomNum(0, 50);
  const step = randomNum(1, 10);
  const arr = [first];
  for (let i = 0; i < 9; i += 1) {
    arr.push(arr[i] + step);
  }
  return arr;
};

const progress = () => {
  const arr = generationProgression();
  const miss = randomNum(0, arr.length - 1);
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
export default progress;
