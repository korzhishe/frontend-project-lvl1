#!/usr/bin/env node
import _ from 'lodash';
import { cons } from '@hexlet/pairs';
import make from '../src/index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const QUESTIONS = [];
for (let i = 0; i < 3; i += 1) {
  const x = _.random(0, 100);
  QUESTIONS.push(cons(`${x}`, () => `${isPrime(x) ? 'yes' : 'no'}`));
}

const game = make();
game(
  QUESTIONS,
  'Answer "yes" if given number is prime. Otherwise answer "no".',
);
