import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -2, 4, 8]);
numbersCollection.sort();
console.log(numbersCollection.data);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();

// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Xaayb');

// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(-4);
