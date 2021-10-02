import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const welcomeToTheBrainGames = 'Welcome to the Brain Games!';
const questionName = 'May I have your name? ';
const uncorrectAnswer = (answer, correct, name) => `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`;
const yourAnswer = 'Your answer: ';
const numberQuestions = 3;
const congratulate = name => console.log(`Congratulations, ${name}!`);

export default (getQuestion, task) => {
  console.log(welcomeToTheBrainGames);
  const name = readlineSync.question(questionName);
  console.log(`Hello, ${name}!`);

  const questions = [...Array(numberQuestions).keys()].map(getQuestion);

  return () => {
    console.log(task);
    const isWin = questions.reduce((prev, cur) => {
      if (!prev) return false;
      console.log(`Question: ${car(cur)}`);
      const answer = readlineSync.question(yourAnswer);
      if (answer === cdr(cur)()) {
        console.log('Correct!');
        return true;
      }

      console.log(uncorrectAnswer(answer, cdr(cur)(), name));
      return false;
    }, true);
    if (isWin) congratulate(name);
    return isWin;
  };
};
