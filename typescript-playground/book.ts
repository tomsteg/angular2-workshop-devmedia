import { Log } from './log'

@Log("Decorated Class")
export class Book {

    isbn: string;

    constructor(isbn: string) {
        this.isbn = isbn;
    }

    test() {

    }
}
