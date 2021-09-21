import readlineSync from "readline-sync";
import {car, cdr} from "@hexlet/pairs";

export const make = (questions) => {
    return (name, task) => {
        console.log(`Hello, ${name}!`);
        console.log(task);
        return questions.reduce((prev, cur) => {
            console.log(`Question: ${car(cur)}`);
            const answer = readlineSync.question(`Your answer: `);
            if (answer === cdr(cur)()) console.log(`Correct!`);
            return (answer === cdr(cur)()) && prev;
        }, true);
    }
}