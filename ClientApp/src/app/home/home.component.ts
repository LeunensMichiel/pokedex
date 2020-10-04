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

  constructor(private pokeService: PokemonService) {
    this.getPokemons();
  }

  ngOnInit() {}

  getPokemons(): void {
    this.pokeService.getAllPokemon().subscribe((data: PokeAPI) => {
      this.pokemons = data;

      if (this.pokemons.results && this.pokemons.results.length) {
        this.pokemons.results.forEach((pokemon) => {
          // // set pokemon id
          // pokemon.id = pokemon.url.split('/')[
          //   pokemon.url.split('/').length - 2
          // ];
          this.getSinglePokemon(pokemon);
        });
      }
    });
  }

  getSinglePokemon(pokemon: Results) {
    this.pokeService
      .getSinglePokemon(pokemon.name)
      .subscribe((poke: Pokemon) => {
        pokemon.details = poke;
        // if (pokemon.id === '151') {
        //   this.pokemonsLoaded = true;
        //   this.exportPokemons.emit(this.pokemons.results);
        // }
      });
  }

  getTypeColor(type: string) {
    if (type) {
      return TYPE_COLOURS[type];
    }
  }
}
