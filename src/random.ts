import { customAlphabet, urlAlphabet } from 'nanoid';

const nanoidOneChar = customAlphabet(urlAlphabet + ' ', 1);
const nanoidWord = (length: number) =>
  customAlphabet(urlAlphabet + ' ', length);
const random = Math.random;

const isCharToReplace = () => random() < 0.01;
const getRandomChar = () => nanoidOneChar();

export const isValueToPick = (fitness: number) => random() < fitness;

export const getRandomWord = (wordLength: number) =>
  nanoidWord(wordLength)().substring(0, wordLength);

export const addRandom = (val: string) =>
  val
    .split('')
    .map(c => (isCharToReplace() ? getRandomChar() : c))
    .join('');
