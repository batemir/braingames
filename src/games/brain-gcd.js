import runGame from '../engine';
import { getRandomNumber } from '..';

const getTask = () => {
  const first = getRandomNumber(100);
  const second = getRandomNumber(100);
  let i;
  const question = `${first} ${second}`;
  let answer;
  if (first > second || first === second) {
    i = second;
  } else {
    i = first;
  }
  for (i; i > 0; i -= 1) {
    if (first % i === 0 && second % i === 0) {
      answer = i;
      break;
    }
  }
  return [question, answer];
};
const textOfTask = 'Find the greatest common divisor of given numbers.';
const brainGcd = () => runGame(textOfTask, getTask);
export default brainGcd;
