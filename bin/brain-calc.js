#!/usr/bin/env node
import Core from '../src/index.js';
import calc from '../src/game/calc.js';

console.log(Core('What is the result of the expression?', calc));
