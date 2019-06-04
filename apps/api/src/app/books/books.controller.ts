import { Controller, Get } from '@nestjs/common';
import { Book } from '@d3nyx/api-interface';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function generateBooks(): Book[] {
  let books = [];
  for(let i = 0; i < 1000; i++) {
    const id = Date.now();
    books = books.concat({
      id,
      name: `Book #${id}`,
      authors: ['Author1', 'Author2'],
      year: getRandomArbitrary(1900, 2000),
      price: getRandomArbitrary(10, 200),
      description: 'Description'
    });
  }
  return books;
}

@Controller('books')
export class BooksController {

    @Get() getAll(): Book[] {
        return generateBooks();
    }
}
