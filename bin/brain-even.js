#!/usr/bin/env node
import readlineSync from 'readline-sync'

const WELCOME = 'Welcome to the Brain Even!';
const QUESTION_NAME = `May I have your name? `;
const NUMBERS = [15, 6, 7];

const run = () => {
   console.log(WELCOME);
   const name = readlineSync.question(QUESTION_NAME);
   console.log(`Hello, ${name}!`);
   console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
   const isAllAnswerCorrect = NUMBERS.reduce((prev, cur) => {
      console.log(`Question: ${cur}`);
      const answer = readlineSync.question(`Your answer: `);
      if ((answer === 'yes' && cur % 2 === 0) || (answer === 'no' && cur % 2 != 0)) console.log(`Correct!`);
      return ((answer === 'yes' && cur % 2 === 0) || (answer === 'no' && cur % 2 != 0)) && prev;
   }, true);

   if (isAllAnswerCorrect) console.log(`Congratulations, ${name}!`)
}

run();