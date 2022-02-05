import { getNextChild } from './childAndParent';
import { mapWithFitness } from './fitness';
import { Item } from './Item';
import { getRandomWord } from './random';

export const getFirstGeneration = (totPopulation: number, word: string) => {
  return [...Array(totPopulation).keys()]
    .map(() => getRandomWord(word.length))
    .map(val => mapWithFitness(val, word));
};

export const getNextGen = (
  currentPop: Item[],
  totalPop: number,
  word: string,
  fitnessFunc: (val: string, word: string) => Item
) => {
  return [...Array(totalPop).keys()]
    .map(() => getNextChild(currentPop, word))
    .map(val => fitnessFunc(val, word));
};
