import { Item } from './Item';
import { addRandom, isValueToPick } from './random';

const generateChildFromParent = (
  parentA: Item,
  parentB: Item,
  sliceAt: number
) =>
  addRandom(
    `${parentA.val.substring(0, sliceAt)}${parentB.val.substring(sliceAt)}`
  );

const getParent = (population: Item[], iteration?: number): any => {
  const candidate = population[Math.floor(Math.random() * population.length)];
  // after 500 iteration keep the actual candidate (prevent max call)
  if (iteration && iteration > 500 && candidate) {
    return candidate;
  }

  if (isValueToPick(candidate.fitness)) {
    return candidate;
  }

  if (!iteration) {
    // eslint-disable-next-line no-param-reassign
    iteration = 0;
  }
  // eslint-disable-next-line no-param-reassign
  iteration++;
  return getParent(population, iteration);
};

export const getNextChild = (parents: Item[], word: string) => {
  const parentA = getParent(parents);

  const parentB = getParent(parents.filter(i => i.id !== parentA.id));
  return generateChildFromParent(parentA, parentB, Math.floor(word.length / 2));
};
