#!/usr/bin/env node
import _ from 'lodash'
import {make} from "../src/index.js";
import {cons} from "@hexlet/pairs";

const QUESTIONS = [];
for (let i = 0; i < 5; i++) {
   const x = _.random(0, 100);
   QUESTIONS.push(cons(`${x}`, () => x % 2 === 0 ? 'yes' : 'no'));
}

const game = make();
const isWin = game(QUESTIONS, `Answer "yes" if the number is even, otherwise answer "no".`);
