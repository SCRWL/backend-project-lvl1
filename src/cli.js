import readlineSync from 'readline-sync';

export const Start = () => {
  console.log('Welcome to the Brain Games!');
};

export const helloUser = (username) => {
  console.log(`Hello, ${username}!`);
};

export const cin = (string) => readlineSync.question(string);
export const win = (name) => `Congratulations, ${name}!`;
