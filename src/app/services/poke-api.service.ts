import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private http = inject(HttpClient);

  getAllPokemons(): Observable<any[]>{
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100').pipe(
      switchMap((res: any) => {
        const urls: Observable<any>[] = res.results.map((pokemon: any) => this.http.get<any>(pokemon.url));
        return forkJoin(urls)
      }),
    )
  }

  apiGetPokemons( url: string ): Observable<any>{
    return this.http.get<any>(url).pipe(
      map(res => res)
    )
  }

  getPokemon(id: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getPokemonSpecies(id: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }

}
