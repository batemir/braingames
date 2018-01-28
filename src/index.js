import readlineSync from 'readline-sync';

let userName = '';
const greeting = (condition) => {
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  userName = readlineSync.question('May i have you name? ');
  console.log(`Hello, ${userName}!
  `);
};
export const isPrime = (num) => {
  let answer;
  if (num === 1) {
    return true;
  }
  for (let i = Math.ceil(num / 2); i > 1; i -= 1) {
    if (num % i === 0 || num === 0) {
      return false;
    }
    answer = true;
  }
  return answer;
};
export const getRandomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;
export const getMissingNumInProgression = (firstInSequence, step, missingPosition) => {
  const answer = firstInSequence + ((missingPosition) * step);
  return answer;
};
export default greeting;
