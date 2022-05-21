const Knight = require('./knight');
const KnightsTravails = require('./knightsTravails');

const prompt = require('prompt-sync')();

let origin = '';
let target = '';

const isInvalidInput = (input) => {
  const inputRegEx = new RegExp(/^([A-H][1-8])$/);
  if (input.match(inputRegEx)) return false;

  console.log('Use a letter A-H followed by a number 1-8');
  return true;
}

do {
  origin = prompt('Where do you want the Knight to start?').toUpperCase();
} while (isInvalidInput(origin));

do {
  target = prompt('Where do you want the Knight to end?').toUpperCase();
} while(isInvalidInput(target));

const solver = new KnightsTravails(origin, target, Knight);
solver.executeSearch();
const path = solver.tracePath();

console.log(`You made it in ${path.length - 1} moves!`);
console.log(`The squares the knight moved through were ${path}`);