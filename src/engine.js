import readlineSync from 'readline-sync';

const runGame = (textOfTask, times, solver) => {
  console.log(`Welcome to the Brain Games!
${textOfTask}
  `);
  const userName = readlineSync.question('May i have you name? ');
  console.log(`Hello, ${userName}!
  `);
  let i = 0;
  while (i < times) {
    const condition = solver();
    console.log(`Question: ${condition[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(condition[1])) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${condition[1]}'
Let's try again, ${userName}!`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
