import { nanoid } from 'nanoid';
import { getBestMatch, getFitness, getNextGen } from './util';

const word = 'ciao';

const pop = 100;

const getRandomWord = (word: string) => nanoid().substring(0, word.length);

const initGen = [...Array(pop).keys()].map(() => getRandomWord(word));

// calcola il fitness
const mapWithFitness = (val: string) => ({
  val,
  fitness: getFitness(val, word),
  id: nanoid()
});

let bestMatch: string | undefined = '';
let currentPop = initGen.map(mapWithFitness);

let epocEnd = 0;

do {
  const bestMatchParent = getBestMatch(currentPop);
  if (bestMatchParent) {
    bestMatch = bestMatchParent.val;
    console.log('BEST MATCH: ', bestMatch);
    console.log('BEST MATCH FITNESS: ', bestMatchParent.fitness);
  }
  currentPop = getNextGen(currentPop, pop, word, mapWithFitness);
  epocEnd++;
} while (bestMatch !== word);

console.log('*******************');
console.log('*******************');
console.log(`WORD ${word} found at epoc ${epocEnd}`);
console.log('*******************');
console.log('*******************');
