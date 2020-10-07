import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pokemon, Species, TYPE_COLOURS, Chain } from "../models/pokemon";
import { PokemonService } from "./../services/pokemon.service";

@Component({
  selector: "app-poke-detail",
  templateUrl: "./poke-detail.component.html",
  styleUrls: ["./poke-detail.component.scss"],
})
export class PokeDetailComponent implements OnInit {
  pokemon?: Pokemon;
  species?: Species;
  evolutionChain?: Chain;
  basePokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const term = params["name"];
      this.getSinglePokemon(term);
      this.getPokemonSpecies(term);
    });
  }

  getSinglePokemon(name: string) {
    this.pokeService
      .getSinglePokemon(name)
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }

  getPokemonSpecies(name: string) {
    this.pokeService
      .getPokemonSpeciesWithEvolutionChainAndPokemon(name)
      .subscribe((res) => {
        this.species = res[0];
        this.evolutionChain = res[1].chain;
        this.basePokemon = res[2];
      });
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
