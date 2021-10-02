#!/usr/bin/env node
import _ from 'lodash';
import { car, cdr, cons } from '@hexlet/pairs';
import make from '../src/index.js';

const Operations = [
  cons('+', (x, y) => x + y),
  cons('-', (x, y) => x - y),
  cons('/', (x, y) => x / y),
  cons('*', (x, y) => x * y),
];

const getQuestion = () => {
  const x = _.random(1, 100);
  const y = _.random(1, 100);
  const operation = Operations[_.random(0, 3)];
  return cons(`${x} ${car(operation)} ${y}`, () => `${cdr(operation)(x, y)}`);
};

const game = make(getQuestion, 'What is the result of the expression?');
game();
