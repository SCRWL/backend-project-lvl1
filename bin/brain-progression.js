#!/usr/bin/env node
import Core from '../src/index.js';
import progress from '../src/game/progress.js';

console.log(Core('What number is missing in the progression?', progress));
