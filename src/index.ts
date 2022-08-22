import { Sorter } from './Sorter';

const sorter = new Sorter([10, 3, -2, 4, 8]);
sorter.sort();

console.log(sorter.collection);

// to get this to work with strings:
// strings are immutable.
// we'd want to split the string into a new array.
//  we'd also want to turn everything to the same case
