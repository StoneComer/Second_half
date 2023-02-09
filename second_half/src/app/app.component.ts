import { Component, Input } from '@angular/core';

interface Book {
  name: string | null;
  author: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'second_half';
  books: Book[] = [
    {
      name: 'Ведьмак',
      author: 'А. Сапковский',
    },
    {
      name: 'Зов КТулху',
      author: 'Г. Лавкрафт',
    },
    {
      name: 'Пикник на обочине',
      author: 'Братья Стругацкие',
    }
  ];

  correct_name: string = '';
  correct_author: string = '';

  create_book = {
    name: null,
    author: null,
  };

  createBook() {
    this.books.push({
      name: this.create_book.name,
      author: this.create_book.author,
    });
  }

}
