import readlineSync from 'readline-sync';
import Start from './cli.js';

const Core = (rules, game) => {
  const name = Start();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const gameArr = game();
    const question = gameArr[0];
    const answer = gameArr[1];
    console.log(`Question: ${question}`);
    const userInput = readlineSync.question('Your answer: ');
    if (answer !== userInput) {
      return `'${userInput}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
};
export default Core;
