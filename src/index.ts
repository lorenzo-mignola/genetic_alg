import { getBestMatch, mapWithFitness } from './fitness';
import { getFirstGeneration, getNextGen } from './generation';

const word = 'ciao mondo';

const pop = 100;

const initGen = getFirstGeneration(pop, word);

let bestMatch: string | undefined = '';
let currentPop = initGen;

let epochEnd = 0;

do {
  const bestMatchParent = getBestMatch(currentPop);
  if (bestMatchParent) {
    bestMatch = bestMatchParent.val;
    console.log('BEST MATCH: ', bestMatch);
    console.log('BEST MATCH FITNESS: ', bestMatchParent.fitness);
  }
  currentPop = getNextGen(currentPop, pop, word, mapWithFitness);
  epochEnd++;
} while (bestMatch !== word);

console.log('*******************');
console.log('*******************');
console.log(`WORD ${word} found at epoch ${epochEnd}`);
console.log('*******************');
console.log('*******************');
