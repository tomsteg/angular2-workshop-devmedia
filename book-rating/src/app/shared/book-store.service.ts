import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from '../shared/book';

@Injectable()
export class BookStoreService {

  constructor(private http: Http,
  @Inject('MY_BOOK_MONKEY_URL') private url: string) { }

  getSingle(isbn: string): Observable<Book> {

    return this.http.get('http://book-monkey2-api.angular2buch.de/book/' + isbn)
      .map(response => response.json())
      .map(rawBook => new Book(rawBook.isbn, rawBook.title, rawBook.description, rawBook.rating));
  }

  getAll(): Observable<Book[]> {

    return this.http.get(this.url)
      .map(response => response.json())
      .map(rawBooks => rawBooks
        .map(rawBook => new Book(rawBook.isbn, rawBook.title, rawBook.description, rawBook.rating))
      );
  }
}
