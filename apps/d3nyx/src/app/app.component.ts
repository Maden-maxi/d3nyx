import { Component } from '@angular/core';
import { Book } from '@d3nyx/api-interface';


function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function makeid(length) {
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateBooks(): Book[] {
  let books = [];
  for(let i = 0; i < 1000; i++) {
    books = books.concat({
      id: makeid(10),
      name: `Book #${getRandomArbitrary(10, 200)}`,
      authors: ['Author1', 'Author2'],
      year: getRandomArbitrary(1900, 2000),
      price: getRandomArbitrary(10, 200),
      description: 'Description'
    });
  }
  return books;
}

@Component({
  selector: 'd3nyx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books = generateBooks();
  headers = [
    {name: 'name', title: 'Name'},
    {title: 'Authors'},
    {name: 'year', title: 'Year'},
    {name: 'price', title: 'Price'},
    {title: 'Description'},
  ];
}
