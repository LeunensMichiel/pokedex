import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pokemon, Species, TYPE_COLOURS } from "../models/pokemon";
import { PokemonService } from "./../services/pokemon.service";

@Component({
  selector: "app-poke-detail",
  templateUrl: "./poke-detail.component.html",
  styleUrls: ["./poke-detail.component.scss"],
})
export class PokeDetailComponent implements OnInit {
  pokemon: Pokemon;
  species: Species;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getSinglePokemon();
    this.getPokemonSpecies();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.species);
  }

  getSinglePokemon() {
    const name = this.route.snapshot.paramMap.get("name");
    this.pokeService
      .getSinglePokemon(name)
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }

  getPokemonSpecies() {
    const name = this.route.snapshot.paramMap.get("name");
    this.pokeService
      .getPokemonSpecies(name)
      .subscribe((species) => (this.species = species));
  }

  getEnglishGenus() {
    return this.species.genera.find((gen) => gen.language.name === "en");
  }

  getTypeColor(type: string) {
    if (type) {
      return TYPE_COLOURS[type];
    }
  }
}
