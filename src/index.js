import readlineSync from 'readline-sync';
const greeting = () => {
	const userName = readlineSync.question('May i have you name? ');
	console.log(`Hello, ${userName}!`);
};
export default greeting;
