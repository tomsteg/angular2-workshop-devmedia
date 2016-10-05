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

  add(book: Book) {
    this.books.push(book);
  }
}
