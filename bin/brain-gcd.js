#!/usr/bin/env node
import * as cli from '../src/cli.js';
import * as logic from '../src/index.js';

cli.Start();
const username = cli.cin('May I have your name? ');
cli.helloUser(username);
console.log('Find the greatest common divisor of given numbers.');
console.log(logic.threeAnswers('brain-gcd', username));
