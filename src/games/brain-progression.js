import runGame from '../engine';
import { getRandomNumber } from '..';

const getTask = () => {
  const firstInSequence = getRandomNumber(100);
  const step = getRandomNumber(9, 2);
  const missingStep = getRandomNumber(8);
  const sequence = [firstInSequence];
  for (let i = 0; i < 9; i += 1) {
    if (i === missingStep) {
      sequence.push('..');
    } else if (i - 1 === missingStep) {
      sequence.push(sequence[i - 1] + (step * 2));
    } else {
      sequence.push(sequence[i] + step);
    }
  }
  const answer = sequence[missingStep] + step;
  const question = sequence.join(' ');
  return [question, answer];
};
const textOfTask = 'What number is missing in this progression?';
const brainProgression = () => runGame(textOfTask, getTask);
export default brainProgression;
