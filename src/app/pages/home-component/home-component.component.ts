import { Component, computed, inject, signal } from '@angular/core';
import { PokeListComponent } from '../../shared/poke-list/poke-list.component';
import { PokeSearchComponent } from "../../shared/poke-search/poke-search.component";
import { PokeApiService } from '../../services/poke-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [PokeListComponent, PokeSearchComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {
  private pokeApiService = inject(PokeApiService);

  apiError = signal(false);
  allPokemons = toSignal(this.getAllPokemon(), { initialValue: [] });
  searchText = signal<string>('');
  pokemons = computed(() => {
    return this.searchText()
      ? this.allPokemons().filter((res: any) => !res.name.indexOf(this.searchText().toLowerCase()))
      : this.allPokemons()
  });

  setSearchText(value: string): void {
    this.searchText.set(value.trim());
  }

  private getAllPokemon(): Observable<any[]> {
    return this.pokeApiService.getAllPokemons().pipe(
      catchError(() => {
        this.apiError.set(true);
        return of([]);
      })
    )
  }
}
