import runGame from '../engine';
import { getRandomNumber } from '..';

const getTask = () => {
  const number = getRandomNumber(20);
  const getAnswer = (num) => {
    let result = '';
    for (let i = Math.ceil(num / 2); i >= 1; i -= 1) {
      if (num % i === 0 || num === 0) {
        result = 'no';
        return result;
      }
      result = 'yes';
    }
    return result;
  };
  const answer = getAnswer(number);
  return [number, answer];
};

const textOfTask = 'Is this number prime? Answer "yes" or "no".';
const brainPrime = () => runGame(textOfTask, getTask);
export default brainPrime;
