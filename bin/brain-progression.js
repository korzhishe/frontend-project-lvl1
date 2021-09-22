#!/usr/bin/env node
import readlineSync from "readline-sync";
import {make_v2} from "../src/index.js";
import {cons} from "@hexlet/pairs";

const WELCOME = 'Welcome to the Brain Games!';
const QUESTION_NAME = `May I have your name? `;
const QUESTIONS = [
    cons(`5 7 9 11 13 .. 17 19 21 23`, () => '15'),
    cons(`2 5 8 .. 14 17 20 23 26 29`, () => '11'),
    cons(`14 19 24 29 34 39 44 49 54 ..`, () => '59'),
];

console.log(WELCOME);
const name = readlineSync.question(QUESTION_NAME);
const unCorrectAnswer = (answer, correct, name) => `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`;
const game = make_v2(QUESTIONS, unCorrectAnswer);
const isWin = game(name, `Find the greatest common divisor of given numbers.`);
if (isWin) console.log(`Congratulations, ${name}!`);