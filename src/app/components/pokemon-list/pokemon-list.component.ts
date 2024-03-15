import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent {
  pokemonService = inject(PokemonService);
  pokemons: Pokemon[] = [];

  ngOnInit() {
    this.pokemonService.getPokemons(0, 20).subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }
}
