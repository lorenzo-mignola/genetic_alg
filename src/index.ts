import chalk from 'chalk';
import ora from 'ora';
import { findWord } from './findWord';

const word = 'cia0'; // await getWord();
const pop = 100; // await getPopulationSize();

const spinner = ora();
spinner.color = 'blue';
spinner.text = chalk.magenta('🔍 Finding word');
spinner.start();
const epochEnd = findWord(pop, word);
spinner.succeed(chalk.greenBright('🌟 WORD FOUND 🌟'));

console.log(chalk.inverse('*******************'));
console.log(chalk.inverse('*******************'));
console.log(`WORD ${chalk.blue(word)} found at epoch ${chalk.blue(epochEnd)}`);
console.log(chalk.inverse('*******************'));
console.log(chalk.inverse('*******************'));
