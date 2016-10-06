import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {

  @Output() bookCreated = new EventEmitter<Book>();
  book = Book.empty();

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
  }
}
