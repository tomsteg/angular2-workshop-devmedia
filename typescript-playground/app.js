var Book = (function () {
    function Book(isbn) {
        this.isbn = isbn;
    }
    return Book;
}());

var book = new Book('test');
console.log(book.isbn);
//# sourceMappingURL=app.js.map