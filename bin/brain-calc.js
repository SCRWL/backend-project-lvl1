#!/usr/bin/env node
import core from '../src/index.js';
import calculate from '../src/game/calc.js';

core('What is the result of the expression?', calculate);
