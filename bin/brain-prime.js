#!/usr/bin/env node
import Core from '../src/index.js';
import isPrime from '../src/game/prime.js';

console.log(Core('Answer "yes" if given number is prime. Otherwise answer "no".', isPrime));
