import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
const numbersCollection = new NumbersCollection([10, 3, -2, 4, 8]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);

// to get this to work with strings:
// strings are immutable.
// we'd want to split the string into a new array.
//  we'd also want to turn everything to the same case
