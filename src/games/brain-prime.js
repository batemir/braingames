import runGame from '../engine';
import { getRandomNumber, isPrime } from '..';

const getTask = () => {
  const number = getRandomNumber(10);
  let answer = '';
  if (isPrime(number)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [number, answer];
};

const textOfTask = 'Is this number prime? Answer "yes" or "no".';
const brainPrime = () => runGame(textOfTask, getTask);
export default brainPrime;
