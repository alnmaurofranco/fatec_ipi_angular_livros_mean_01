import { Component, EventEmitter, Output } from '@angular/core';
import { IBook } from '../interface/IBook';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css'],
})
export class LivroInserirComponent {
  @Output() bookAdded = new EventEmitter<IBook>();

  id: string;
  title: string;
  author: string;
  numberOfPages: string;

  onAddBook() {
    const book = {
      id: uuid(),
      title: this.title,
      author: this.author,
      numberOfPages: this.numberOfPages,
    } as IBook;
    this.bookAdded.emit(book);
  }
}
