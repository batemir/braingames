import readlineSync from 'readline-sync';

let userName = '';
const greeting = (condition) => {
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  userName = readlineSync.question('May i have you name? ');
  console.log(`Hello, ${userName}!
  `);
};
export const evenUneven = () => {
  const check = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  let counter = 0;
  while (counter < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${check(randomNumber)}'
Let's try again, ${userName}!`);
      counter = 0;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default greeting;
