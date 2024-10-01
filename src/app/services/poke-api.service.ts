import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private http = inject(HttpClient);
  private allPokemons: any[] = [];

  getAllPokemons(): Observable<any[]> {
    if (this.allPokemons.length) {
      return of(this.allPokemons);
    }
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100').pipe(
      switchMap((res: any) => {
        const urls: Observable<any>[] = res.results.map((pokemon: any) => this.http.get<any>(pokemon.url));
        return forkJoin(urls);
      }),
      tap(res => this.allPokemons = res)
    )
  }

  getPokemonData(id: string): Observable<[any,any]> {
    const pokemon = this.getPokemon(id);
    const name = this.getPokemonSpecies(id);
    return forkJoin([pokemon, name]);
  }

  private getPokemon(id: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  private getPokemonSpecies(id: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }

}
