import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([50, 10, 9, 5, 0, -8]);
numbersCollection.sort()
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("mewDentiLoandieElzaanNakha");
charactersCollection.sort();
console.log(charactersCollection.data);


const linkedList = new LinkedList();
linkedList.add(50)
linkedList.add(-12)
linkedList.add(3)
linkedList.add(5)

linkedList.sort();
linkedList.print();



// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection("helloW");
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data)

// const linkedList = new LinkedList();
// linkedList.add(50)
// linkedList.add(-12)
// linkedList.add(3)
// linkedList.add(5)

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();


