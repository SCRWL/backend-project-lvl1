#!/usr/bin/env node
import * as game from '../src/cli.js';

game.Start();
console.log(`Hello, ${game.cin('May I have your name? ')}`);
