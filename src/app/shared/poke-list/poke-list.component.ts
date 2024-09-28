import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokeSearchComponent } from "../poke-search/poke-search.component";

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [CommonModule, RouterModule, PokeSearchComponent],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent implements OnInit {

  private setAllPokemons : any;
  public getAllPokemons : any;
  public apiError: boolean = false;



  constructor(
    private PokeApiService: PokeApiService
  ) {}
    
  

  ngOnInit(): void {
    this.PokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true;
      }
      
    );
  }


  public getSearch(value:string){
    const filter = this.setAllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }
}
