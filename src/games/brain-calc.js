import runGame from '../engine';
import { getRandomNumber } from '..';

const getTask = () => {
  const first = getRandomNumber(100);
  const second = getRandomNumber(100);
  let str;
  let num;
  switch (getRandomNumber(2)) {
    case 0:
      num = first + second;
      str = `${first} + ${second}`;
      break;
    case 1:
      num = first - second;
      str = `${first} - ${second}`;
      break;
    case 2:
      num = first * second;
      str = `${first} * ${second}`;
      break;
    default:
      return null;
  }
  return [str, num];
};
const textOfTask = 'What is the result of the expression?';
const brainCalc = () => runGame(textOfTask, 3, getTask);
export default brainCalc;
