#!/usr/bin/env node
import * as cli from '../src/cli.js';

cli.Start();
console.log(`Hello, ${cli.cin('May I have your name? ')}`);
