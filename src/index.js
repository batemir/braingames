import readlineSync from 'readline-sync';

let userName = '';
const greeting = (condition) => {
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  userName = readlineSync.question('May i have you name? ');
  console.log(`Hello, ${userName}!
  `);
};

export const getRandomNumber = max => Math.floor(Math.random() * max);
export default greeting;
