import { nanoid } from 'nanoid';

export interface Parent {
  val: string;
  fitness: number;
  id: string;
}
const isValueToPick = (fitness: number) => Math.random() < fitness;
const isCharToReplace = () => Math.random() < 0.01;

const getParent = (population: Parent[]): any => {
  const candidate = population[Math.floor(Math.random() * population.length)];
  if (isValueToPick(candidate.fitness)) {
    return candidate;
  }
  return getParent(population);
};

const getRandomChar = () => nanoid().substring(0, 1);

const getChild = (parentA: Parent, parentB: Parent, sliceAt: number) =>
  addRandom(
    `${parentA.val.substring(0, sliceAt)}${parentB.val.substring(sliceAt)}`
  );

const getNextChild = (parents: Parent[], word: string) => {
  const parentA = getParent(parents);

  const parentB = getParent(parents.filter(i => i.id !== parentA.id));
  return getChild(parentA, parentB, Math.floor(word.length / 2));
};

const addRandom = (val: string) =>
  val
    .split('')
    .map(c => (isCharToReplace() ? getRandomChar() : c))
    .join('');

export const getFitness = (val: string, word: string) =>
  val
    .split('')
    .reduce(
      (score, curChar, index) => (curChar === word[index] ? score + 1 : score),
      0
    ) / word.length;

export const getBestMatch = (population: Parent[]) => {
  const bestScore = Math.max(...population.map(i => i.fitness));
  return population.find(i => i.fitness === bestScore);
};

export const getNextGen = (
  currentPop: Parent[],
  totalPop: number,
  word: string,
  fitnessFunc: (val: string) => Parent
) => {
  return [...Array(totalPop).keys()]
    .map(() => getNextChild(currentPop, word))
    .map(fitnessFunc);
};
