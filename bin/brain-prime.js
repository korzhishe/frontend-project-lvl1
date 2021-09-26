#!/usr/bin/env node
import readlineSync from "readline-sync";
import {make_v2} from "../src/index.js";
import {cons} from "@hexlet/pairs";

const WELCOME = 'Welcome to the Brain Games!';
const QUESTION_NAME = `May I have your name? `;
const QUESTIONS = [
    cons(`2`, () => 'yes'),
    cons(`3`, () => 'yes'),
    cons(`4`, () => 'no'),
];

console.log(WELCOME);
const name = readlineSync.question(QUESTION_NAME);
const unCorrectAnswer = (answer, correct, name) => `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`;
const game = make_v2(QUESTIONS, unCorrectAnswer);
const isWin = game(name, `Answer "yes" if given number is prime. Otherwise answer "no".`);
if (isWin) console.log(`Congratulations, ${name}!`);