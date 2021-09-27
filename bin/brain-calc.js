#!/usr/bin/env node
import _ from 'lodash'
import {make} from "../src/index.js";
import {cons} from "@hexlet/pairs";

const QUESTIONS = [];
for (let i = 0; i < 5; i++) {
    const x = _.random(0, 100);
    const y = _.random(0, 100);
    QUESTIONS.push(cons(`${x} + ${y}`, () => `${x + y}`));
}

const game = make();
const isWin = game(QUESTIONS, `What is the result of the expression?.`);
