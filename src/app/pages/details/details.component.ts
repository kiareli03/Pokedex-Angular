import { Component, OnInit } from '@angular/core';
import { PokeHeaderComponent } from "../../shared/poke-header/poke-header.component";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PokeApiService } from '../../services/poke-api.service';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [PokeHeaderComponent,CommonModule,RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {  
    this.getPokemon();
  }

   getPokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);
    
     forkJoin([pokemon, name]).subscribe({
      next: (res) => {
        this.pokemon = res;
        this.isLoading = true;
      },
      error: (err) => {
        this.apiError = true;
      }
    });
    
  }
}
