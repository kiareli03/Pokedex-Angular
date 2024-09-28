import { Component } from '@angular/core';
import { PokeHeaderComponent } from '../../shared/poke-header/poke-header.component';
import { PokeListComponent } from '../../shared/poke-list/poke-list.component';
import { PokeSearchComponent } from '../../shared/poke-search/poke-search.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [PokeHeaderComponent,PokeListComponent,PokeSearchComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {

}
