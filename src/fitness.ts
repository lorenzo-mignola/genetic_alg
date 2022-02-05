import { nanoid } from 'nanoid';
import { Item } from './Item';

const getFitness = (val: string, word: string) =>
  val
    .split('')
    .reduce(
      (score, curChar, index) => (curChar === word[index] ? score + 1 : score),
      0
    ) / word.length;

export const mapWithFitness = (val: string, word: string) => ({
  val,
  fitness: getFitness(val, word),
  id: nanoid()
});

export const getBestMatch = (population: Item[]) => {
  const bestScore = Math.max(...population.map(i => i.fitness));
  return population.find(i => i.fitness === bestScore);
};
