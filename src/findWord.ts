import chalk from 'chalk';
import cliProgress from 'cli-progress';
import { getBestMatch, mapWithFitness } from './fitness';
import { getFirstGeneration, getNextGen } from './generation';

const progressBar = new cliProgress.SingleBar(
  {
    format: `[{bar}] ${chalk.blue('{value}')}% | ${chalk.cyan('{best}')}`
  },
  cliProgress.Presets.shades_classic
);

export const findWord = (populationSize: number, word: string) => {
  const initGen = getFirstGeneration(populationSize, word);

  let bestMatch: string | undefined = '';
  let currentPop = initGen;

  let epochEnd = 0;

  progressBar.start(100, 0);

  do {
    const bestMatchItem = getBestMatch(currentPop);
    if (bestMatchItem) {
      bestMatch = bestMatchItem.val;
      const fitnessTrunc = Math.trunc(bestMatchItem.fitness * 100);
      progressBar.update(fitnessTrunc, { best: bestMatch });
    }
    currentPop = getNextGen(currentPop, populationSize, word, mapWithFitness);
    epochEnd++;
  } while (bestMatch !== word);

  progressBar.stop();

  return epochEnd;
};
