#!/usr/bin/env node
import Core from '../src/index.js';
import gcd from '../src/game/gcd.js';

console.log(Core('Find the greatest common divisor of given numbers.', gcd));
