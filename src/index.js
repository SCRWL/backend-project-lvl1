import readlineSync from 'readline-sync';

const round = 3;

const core = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (let i = 0; i < round; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userInput = readlineSync.question('Your answer: ');
    if (answer !== userInput) {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default core;
