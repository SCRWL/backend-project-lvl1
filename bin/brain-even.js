#!/usr/bin/env node
import core from '../src/index.js';
import even from '../src/game/even.js';

core('Answer "yes" if the number is even, otherwise answer "no".', even);
