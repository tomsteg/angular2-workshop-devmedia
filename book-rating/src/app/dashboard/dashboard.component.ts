import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private bs: BookStoreService) {  }

  ngOnInit() {

    // bs.getAll()
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  add(book: Book) {
    this.books.push(book);
  }
}
