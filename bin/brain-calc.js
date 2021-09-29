#!/usr/bin/env node
import _ from 'lodash';
import { cons } from '@hexlet/pairs';
import make from '../src/index.js';


const QUESTIONS = [];
for (let i = 0; i < 3; i += 1) {
  const x = _.random(0, 100);
  const y = _.random(0, 100);
  QUESTIONS.push(cons(`${x} + ${y}`, () => `${x + y}`));
}

const game = make();
game(QUESTIONS, `What is the result of the expression?.`);
