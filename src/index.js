import readlineSync from "readline-sync";
import {car, cdr} from "@hexlet/pairs";

const WELCOME = 'Welcome to the Brain Games!';
const QUESTION_NAME = `May I have your name? `;

export const make = () => {
    console.log(WELCOME);
    const name = readlineSync.question(QUESTION_NAME);
    return (questions, task, unCorrectAnswer) => {
        console.log(`Hello, ${name}!`);
        console.log(task);
        const isWin = questions.reduce((prev, cur) => {
            if (!prev) return false;
            console.log(`Question: ${car(cur)}`);
            const answer = readlineSync.question(`Your answer: `);
            if (answer === cdr(cur)()) {
                console.log(`Correct!`);
                return true;
            }
            else {
                if(unCorrectAnswer != undefined) console.log(unCorrectAnswer(answer, cdr(cur)(), name));
                return false;
            }
        }, true);
        if (isWin) console.log(`Congratulations, ${name}!`);
        return isWin;
    }
}

export const make_v2 = (questions, unCorrectAnswer) => {
    return (name, task) => {
        console.log(`Hello, ${name}!`);
        console.log(task);
        return questions.reduce((prev, cur) => {
            console.log(`Question: ${car(cur)}`);
            const answer = readlineSync.question(`Your answer: `);
            if (answer === cdr(cur)()) console.log(`Correct!`);
            else console.log(unCorrectAnswer(answer, cdr(cur)(), name));
            return (answer === cdr(cur)()) && prev;
        }, true);
    }
}