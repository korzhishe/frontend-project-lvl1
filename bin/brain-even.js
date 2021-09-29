#!/usr/bin/env node
import _ from 'lodash';
import { cons } from '@hexlet/pairs';
import make from '../src/index.js';

const QUESTIONS = [];
for (let i = 0; i < 3; i += 1) {
  const x = _.random(0, 100);
  QUESTIONS.push(cons(`${x}`, () => (x % 2 === 0 ? 'yes' : 'no')));
}

const game = make();
game(QUESTIONS, `Answer "yes" if the number is even, otherwise answer "no".`);
