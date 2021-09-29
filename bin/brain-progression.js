#!/usr/bin/env node
import _ from 'lodash';
import { cons } from '@hexlet/pairs';
import make from '../src/index.js';

const QUESTIONS = [];

function masToString(mas) {
  let res = '';
  for (const el of mas) {
    res = `${res}${el} `;
  }
  return res;
}

for (let i = 0; i < 3; i += 1) {
  const pr = _.random(0, 10);
  const index = _.random(0, 9);
  let curNumber = _.random(0, 100);
  const mas = [];
  for (let j = 0; j < 10; j++) {
    mas.push(curNumber);
    curNumber += pr;
  }
  const answer = mas[index];
  mas[index] = '..';
  QUESTIONS.push(cons(`${masToString(mas)}`, () => `${answer}`));
}

const game = make();
game(QUESTIONS, `What number is missing in the progression?`);
