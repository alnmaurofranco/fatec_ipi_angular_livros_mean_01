import { Component, Input } from '@angular/core';
import { IBook } from '../interface/IBook';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent {
  @Input() books: IBook[] = [];
}
