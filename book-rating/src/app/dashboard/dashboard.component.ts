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

  constructor(private bookStoreService: BookStoreService) {
    this.bookStoreService = bookStoreService;
  }

  ngOnInit() {

    this.bookStoreService.getAll()
      .subscribe(books => {
        this.books = books;
      });
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  add(book: Book) {
    this.books.push(book);
  }

}
