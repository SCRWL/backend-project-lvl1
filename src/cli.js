import readlineSync from 'readline-sync';

export const Start = () => {
  console.log('Welcome to the Brain Games!');
};

export const cin = (string) => {
  return readlineSync.question(string);
};
