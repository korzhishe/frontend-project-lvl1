#!/usr/bin/env node
import readlineSync from "readline-sync";
import {make} from "../src/index.js";
import {cons} from "@hexlet/pairs";

const WELCOME = 'Welcome to the Brain Calc!';
const QUESTION_NAME = `May I have your name? `;
const QUESTIONS = [
    cons(`4 + 10`, () => '14'),
    cons(`25 - 11`, () => '14'),
    cons(`25 * 7`, () => '175'),
];

console.log(WELCOME);
const name = readlineSync.question(QUESTION_NAME);
const game = make(QUESTIONS);
const isWin = game(name, `AWhat is the result of the expression?.`);
if (isWin) console.log(`Congratulations, ${name}!`)