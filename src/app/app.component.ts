import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeHeaderComponent } from "./components/poke-header/poke-header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PokeHeaderComponent],
  template: `
    <app-poke-header />
    <main>
      <router-outlet />
    </main>
  `
})
export class AppComponent {
  title = 'Pokedex-Angular';
}
