import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const WELCOME = 'Welcome to the Brain Games!';
const QUESTION_NAME = 'May I have your name? ';
const unCorrectAnswer = (answer, correct, name) => `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`;
const YOUR_ANSWER = 'Your answer: ';

export default () => {
  console.log(WELCOME);
  const name = readlineSync.question(QUESTION_NAME);
  console.log(`Hello, ${name}!`);
  return (questions, task) => {
    console.log(task);
    const isWin = questions.reduce((prev, cur) => {
      if (!prev) return false;
      console.log(`Question: ${car(cur)}`);
      const answer = readlineSync.question(YOUR_ANSWER);
      if (answer === cdr(cur)()) {
        console.log('Correct!');
        return true;
      }

      console.log(unCorrectAnswer(answer, cdr(cur)(), name));
      return false;
    }, true);
    if (isWin) console.log(`Congratulations, ${name}!`);
    return isWin;
  };
};
