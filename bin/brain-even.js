#!/usr/bin/env node
import _ from 'lodash';
import { cons } from '@hexlet/pairs';
import make from '../src/index.js';

const getQuestion = () => {
  const x = _.random(0, 100);
  return cons(`${x}`, () => (x % 2 === 0 ? 'yes' : 'no'));
};

const game = make(getQuestion);
game('Answer "yes" if the number is even, otherwise answer "no".');
