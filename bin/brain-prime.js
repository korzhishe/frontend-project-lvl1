#!/usr/bin/env node
import {make} from "../src/index.js";
import {cons} from "@hexlet/pairs";
import _ from "lodash";

const isPrime = (num) => {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

const QUESTIONS = [];
for (let i = 0; i < 3; i++) {
    const x = _.random(0, 100);
    QUESTIONS.push(cons(`${x}`, () => `${isPrime(x) ? 'yes' : 'no'}`));
}

const game = make();
game(QUESTIONS, `Answer "yes" if given number is prime. Otherwise answer "no".`);