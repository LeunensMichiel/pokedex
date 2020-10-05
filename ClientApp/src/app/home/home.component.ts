import { Component, OnInit } from "@angular/core";
import {
  Pokemon,
  Results,
  PokeAPI,
  Type,
  TYPE_COLOURS,
} from "../models/pokemon";
import { PokemonService } from "./../services/pokemon.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  pokemons: PokeAPI;
  pokemonsLoaded: boolean;

  constructor(private pokeService: PokemonService) {}

  ngOnInit() {
    this.pokemonsLoaded = false;
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokeService
      .getAllPokemon()
      .subscribe((data: PokeAPI) => {
        this.pokemons = data;
        if (this.pokemons.results && this.pokemons.results.length) {
          this.pokemons.results.forEach((pokemon) => {
            this.getSinglePokemon(pokemon);
          });
        }
      })
      .add(() => {
        this.pokemonsLoaded = true;
      });
  }

  getSinglePokemon(pokemon: Results) {
    this.pokeService
      .getSinglePokemon(pokemon.name)
      .subscribe((poke: Pokemon) => {
        pokemon.details = poke;
      });
  }

  getTypeColor(type: string) {
    if (type) {
      return TYPE_COLOURS[type];
    }
  }
}
