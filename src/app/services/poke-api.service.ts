import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, Observable, of, switchMap, tap } from 'rxjs';
import { Pokemon, PokemonQueryResults, PokemonSpecies } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private http = inject(HttpClient);
  private allPokemons: Pokemon[] = [];

  getAllPokemons(): Observable<Pokemon[]> {
    if (this.allPokemons.length) {
      return of(this.allPokemons);
    }
    return this.http.get<PokemonQueryResults>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100').pipe(
      switchMap((res) => {
        const urls: Observable<Pokemon>[] = res.results.map((pokemon) => this.http.get<Pokemon>(pokemon.url));
        return forkJoin(urls);
      }),
      tap(res => this.allPokemons = res)
    )
  }

  getPokemonData(id: string): Observable<[Pokemon,PokemonSpecies]> {
    const pokemon = this.getPokemon(id);
    const name = this.getPokemonSpecies(id);
    return forkJoin([pokemon, name]);
  }

  private getPokemon(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  private getPokemonSpecies(id: string): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }

}
