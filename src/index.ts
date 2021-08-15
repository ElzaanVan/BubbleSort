import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([50, 10, 9, 5, 0, -5]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);