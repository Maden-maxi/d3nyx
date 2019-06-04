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
  for(let i = 0; i < 1005; i++) {
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
  get prices() {
    return this.books.map(book => book.price);
  }
  get avaragePrice() {
    const avgPrice = this.prices.reduce((prev, next) => prev + next);
    return Math.round(avgPrice / this.prices.length);
  }
  get minPrice() {
    return Math.min(...this.prices);
  }
  get maxPrice() {
    return Math.max(...this.prices);
  }
  getPriceType(price) {
    const avgMin = this.avaragePrice - (this.avaragePrice / 2);
    const avgMax = this.avaragePrice + (this.avaragePrice / 2);
    if (price < avgMin) {
      return 'low';
    }
    if (price > avgMax) {
      return 'premium';
    }
    if (price >= avgMin && price <= avgMax) {
      return 'middle';
    }
  }
}
