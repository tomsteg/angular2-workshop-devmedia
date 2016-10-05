import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  ngOnInit() {
    this.books = [
      new Book('XXX', 'AngularJS', ':-)', 1),
      new Book('XXX', 'Angular2', ':-)', 5)
    ];
    this.reorderBooks();
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  add(isbn, title, description) {
    let book = new Book(isbn.value, title.value, description.value);
    this.books.push(book);
    isbn.value = title.value = description.value = '';
  }
}
