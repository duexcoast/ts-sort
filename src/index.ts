class Sorter {
  // collection: number[];
  // all these extra lines are unneccsary if we put (public collection: number[]) in the constructor arg
  constructor(public collection: number[]) {
    // this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -2, 4, 8]);
sorter.sort();

console.log(sorter.collection);

// to get this to work with strings:
// strings are immutable.
// we'd want to split the string into a new array.
//  we'd also want to turn everything to the same case
