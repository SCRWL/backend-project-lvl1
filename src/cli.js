import readlineSync from 'readline-sync';

export const Start = () => {
  console.log('Welcome to the Brain Games!');
};

export const helloUser = (username) => {
  console.log(`Hello, ${username}!`);
};

export const cin = (string) => readlineSync.question(string);

export const randomNum = (max) => Math.floor(Math.random() * max);

export const win = (name) => `Congratulations, ${name}!`;

export const plus = (x, y) => String(x + y);

export const multipl = (x, y) => String(x * y);

export const minus = (x, y) => String(x - y);
