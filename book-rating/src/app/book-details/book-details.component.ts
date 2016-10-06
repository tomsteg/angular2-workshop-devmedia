import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  isbn: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.isbn = this.route.params.map(params => params['isbn']);

    /*
    this.route.params.subscribe(params => {
      this.isbn = params['isbn'];
    });
    */
  }
}
