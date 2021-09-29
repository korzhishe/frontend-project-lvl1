#!/usr/bin/env node
import { make } from "../src/index.js";
import { cons } from "@hexlet/pairs";
import _ from "lodash";

const gcd = function (a, b) {
    if (!b) return a;
    return gcd(b, a % b);
}

const QUESTIONS = [];
for (let i = 0; i < 3; i++) {
    const x = _.random(0, 100);
    const y = _.random(0, 100);
    QUESTIONS.push(cons(`${x} ${y}`, () => `${gcd(x, y)}`));
}

const game = make();
game(QUESTIONS, `Find the greatest common divisor of given numbers.`);