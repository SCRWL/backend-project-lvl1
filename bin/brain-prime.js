#!/usr/bin/env node
import core from '../src/index.js';
import isPrime from '../src/game/prime.js';

core('Answer "yes" if given number is prime. Otherwise answer "no".', isPrime);
