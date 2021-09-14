#!/usr/bin/env node
import Core from '../src/index.js';
import even from '../src/game/even.js';

console.log(Core('Answer "yes" if the number is even, otherwise answer "no".', even));
