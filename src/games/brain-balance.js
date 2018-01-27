import runGame from '../engine';
import { getRandomNumber } from '..';

const getTask = () => {
  const number = getRandomNumber(10000);
  let answer = number;
  const getMinAndMax = (num) => {
    const numAsStr = String(num);
    let min = numAsStr[0];
    let max = min;
    for (let i = 1; i < numAsStr.length; i += 1) {
      if (numAsStr[i] > max) {
        max = numAsStr[i];
      }
      if (numAsStr[i] < min) {
        min = numAsStr[i];
      }
    }
    return [Number(min), Number(max)];
  };
  const isBalanced = (num) => {
    const x = getMinAndMax(num);
    if (x[1] - x[0] < 2) {
      return true;
    }
    return false;
  };
  while (isBalanced(answer) !== true) {
    const x = getMinAndMax(answer);
    let numAsStr = String(answer);
    const indexOfMax = numAsStr.indexOf(x[1]);
    numAsStr = numAsStr.replace(numAsStr[indexOfMax], '');
    const indexOfMin = numAsStr.indexOf(x[0]);
    numAsStr = numAsStr.replace(numAsStr[indexOfMin], '');

    x[1] -= 1;
    x[0] += 1;
    answer = Number(`${x[1]}${numAsStr}${x[0]}`);
  }
  const answerAsStr = String(answer);
  const answerAsArr = answerAsStr.split('');
  answerAsArr.sort((a, b) => a - b);
  answerAsArr.reverse();
  answer = answerAsArr.join('');
  return [number, answer];
};

const textOfTask = 'Balance the given number.';
const brainBalance = () => runGame(textOfTask, getTask);
export default brainBalance;
