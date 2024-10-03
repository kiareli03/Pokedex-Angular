import { Component, output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  standalone: true,
  templateUrl: './poke-search.component.html',
  styleUrl: './poke-search.component.scss'
})
export class PokeSearchComponent {
  emitSearch = output<string>();

  public search(value: string){
    this.emitSearch.emit(value);
  }
}
