class Book {

    isbn: string;

    constructor(isbn: string) {
        this.isbn = isbn;
    }
}

debugger;
let book = new Book('test');
console.log(book.isbn);
