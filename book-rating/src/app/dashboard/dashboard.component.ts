import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[];
  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('7411', 'AngularJs', 'schon alt', 1),
      new Book('0815', 'Angular 2', 'einfach geil', 5)
    ];
  }

}
