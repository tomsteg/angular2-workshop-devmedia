import { Book } from './book'

console.log("vor dem Konstruktor")

let book = new Book('test');
book.test();

debugger;
console.log("nach dem Konstruktor")