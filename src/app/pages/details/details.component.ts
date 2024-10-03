import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { PokeApiService } from '../../services/poke-api.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  private pokeApiService = inject(PokeApiService);
  private activatedRoute = inject(ActivatedRoute);

  pokemonData = toSignal(this.getPokemon(), { initialValue: [] });
  pokemon = computed(() => this.pokemonData()[0]);
  pokemonSpecies = computed(() => this.pokemonData()[1]);
  apiError = signal(false);

  private getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];

    return this.pokeApiService.getPokemonData(id).pipe(
      catchError(() => {
        this.apiError.set(true);
        return of([null, null]);
      })
    )
  }
}
