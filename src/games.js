import * as cli from './cli.js';

export const evenOrNot = () => {
  const randomNum = cli.randomNum(100);
  const rightAnswer = (randomNum % 2 !== 0) ? 'no' : 'yes';
  return [randomNum, rightAnswer];
};

export const calc = () => {
  const operators = ['+', '*', '-'];
  const x = cli.randomNum(100);
  const y = cli.randomNum(10);
  const randOp = operators[cli.randomNum(3)];
  const question = `${x} ${randOp} ${y}`;
  switch (randOp) {
    case '+':
      return [question, cli.plus(x, y)];
    case '*':
      return [question, cli.multipl(x, y)];
    default:
      return [question, cli.minus(x, y)];
  }
};

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};

export const gcd = () => {
  const a = cli.randomNum(100);
  const b = cli.randomNum(50);
  const question = `${a} ${b}`;
  const answer = NOD(a, b);
  return [question, String(answer)];
};

export const progres = () => {
  const first = cli.randomNum(50);
  const second = first + cli.randomNum(10);
  const arr = [first, second];
  for (let i = 0; i < 8; i += 1) {
    arr.push(arr[i] + arr[i + 1]);
  }
  const miss = cli.randomNum(arr.length);
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

export const isPrime = () => {
  const question = cli.randomNum(100);
  let answer = 'yes';
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      answer = 'no';
      break;
    }
  }
  return [question, answer];
};
