#!/usr/bin/env node
import _ from 'lodash';
import { cons } from '@hexlet/pairs';
import make from '../src/index.js';

const getQuestion = () => {
  const pr = _.random(1, 10);
  const index = _.random(0, 9);
  const startNumber = _.random(0, 100);
  const mas = _.range(startNumber, startNumber + pr * 10, pr);
  const answer = mas[index];
  mas[index] = '..';
  return cons(`${mas.join(' ')}`, () => `${answer}`);
};

const game = make(getQuestion);
game('What number is missing in the progression?');
