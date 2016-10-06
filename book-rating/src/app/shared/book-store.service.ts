import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from '../shared/book';

@Injectable()
export class BookStoreService {

  constructor(private http: Http) { }

  getSingle(): Observable<Book> {
    return null;
    /*
    this.http.get('http://book-monkey2-api.angular2buch.de/book/9783864903571')
      .map(response => response.json())
      .map(raw => new Book(raw.isbn, raw.title, raw.description, raw.rating))
      .subscribe((book) => {
        this.books = [book];
        this.reorderBooks();
      });
    */
  }

  getAll(): Observable<Book[]> {
    return null;
  }
}
