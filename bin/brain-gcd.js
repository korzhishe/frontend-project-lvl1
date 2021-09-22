#!/usr/bin/env node
import readlineSync from "readline-sync";
import {make_v2} from "../src/index.js";
import {cons} from "@hexlet/pairs";

const WELCOME = 'Welcome to the Brain Gcd!';
const QUESTION_NAME = `May I have your name? `;
const QUESTIONS = [
    cons(`25 50`, () => '25'),
    cons(`100 52`, () => '4'),
    cons(`3 9`, () => '3'),
];

console.log(WELCOME);
const name = readlineSync.question(QUESTION_NAME);
const unCorrectAnswer = (answer, correct, name) => `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`;
const game = make_v2(QUESTIONS, unCorrectAnswer);
const isWin = game(name, `Find the greatest common divisor of given numbers.`);
if (isWin) console.log(`Congratulations, ${name}!`);