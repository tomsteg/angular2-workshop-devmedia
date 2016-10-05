import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {

  @Output() bookCreated = new EventEmitter<Book>();

  formValid = true;

  add(isbn, title, description) {
    if (this.formValid = isbn.value && title.value) {
      let book = new Book(isbn.value, title.value, description.value);
      this.bookCreated.emit(book);
      isbn.value = title.value = description.value = ''; // NOCH UNSCHÖN
    }
  }
}
