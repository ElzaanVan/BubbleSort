"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([50, 10, 9, 5, 0, -8]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection("mewDentiLoandieElzaanNakha");
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(50);
linkedList.add(-12);
linkedList.add(3);
linkedList.add(5);
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
