import {Book} from './book';

describe('Book', () => {

  it('should create an instance', () => {
    expect(new Book('1', 'Title', 'Desc')).toBeTruthy();
  });

  describe('rating', () => {

    let book: Book;
    beforeEach(() => book = new Book('1', 'Title', 'Desc'));

    it('should rate up', () => {
      book.rating = 1;
      book.rateUp();
      expect(book.rating).toEqual(2);
    });

    it('should not rate higher than 5', () => {
      book.rating = 5;
      book.rateUp();
      expect(book.rating).toEqual(5);
    });

    it('should not rate lower than 0', () => {
      book.rating = 0;
      book.rateDown();
      expect(book.rating).toEqual(0);
    });

  });

});
