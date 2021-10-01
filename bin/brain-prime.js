#!/usr/bin/env node
import _ from 'lodash';
import { cons } from '@hexlet/pairs';
import make from '../src/index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const getQuestion = () => {
  const x = _.random(0, 100);
  return cons(`${x}`, () => `${isPrime(x) ? 'yes' : 'no'}`);
};

const game = make(getQuestion);
game('Answer "yes" if given number is prime. Otherwise answer "no".');

