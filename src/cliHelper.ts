import inquirer from 'inquirer';

export const getPopulationSize = async (): Promise<number> => {
  const answers: { populationSize: number } = await inquirer.prompt([
    {
      type: 'input',
      name: 'populationSize',
      message: 'Insert population size:',
      default: 100
    }
  ]);
  return answers.populationSize;
};

export const getWord = async (): Promise<string> => {
  const answers: { word: string } = await inquirer.prompt([
    {
      type: 'input',
      name: 'populationSize',
      message: 'Insert word to find:',
      default: ''
    }
  ]);
  return answers.word;
};
