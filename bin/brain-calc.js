#!/usr/bin/env node
import _ from 'lodash';
import { car, cdr, cons } from '@hexlet/pairs';
import make from '../src/index.js';

const roundResult = x => Math.round(x);

const operations = [
  cons('+', (x, y) => roundResult(x + y)),
  cons('-', (x, y) => roundResult(x - y)),
  cons('*', (x, y) => roundResult(x * y)),
];

const getQuestion = () => {
  const x = _.random(1, 100);
  const y = _.random(1, 100);
  const operation = operations[_.random(0, operations.length-1)];
  return cons(`${x} ${car(operation)} ${y}`, () => `${cdr(operation)(x, y)}`);
};

const game = make(getQuestion, 'What is the result of the expression?');
game();
