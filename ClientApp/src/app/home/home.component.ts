import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../models/pokemon";
import { PokemonService } from "./../services/pokemon.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  pokemon: Pokemon;

  constructor(private pokeService: PokemonService) {
    this.showPokemon();
  }

  ngOnInit() {}

  showPokemon() {
    this.pokeService
      .getSinglePokemon()
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }
}
