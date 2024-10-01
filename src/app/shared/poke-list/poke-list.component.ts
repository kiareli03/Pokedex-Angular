import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent {
  pokemons = input<any[]>([]);
}
