import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { Pokemon, Species, TYPE_COLOURS, Chain } from "../models/pokemon";
import { PokemonService } from "./../services/pokemon.service";
import { ApiService } from "./../services/api.service";
import { Message } from "../models/api";

@Component({
  selector: "app-poke-detail",
  templateUrl: "./poke-detail.component.html",
  styleUrls: ["./poke-detail.component.scss"],
})
export class PokeDetailComponent implements OnInit {
  pokemon: Pokemon;
  species: Species;
  evolutionChain?: Chain;
  basePokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonService,
    private apiService: ApiService,
    private toastr: ToastrService
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

  // getCaughtPokemon() {
  //   this.apiService
  //     .getCaughtPokemon(this.pokemon.id)
  //     .subscribe((res) => console.log(res));
  // }

  getEnglishGenus() {
    return this.species
      ? this.species.genera.find((gen) => gen.language.name === "en").genus
      : "undefined pokemon";
  }

  getTypeColor(type: string) {
    if (type) {
      return TYPE_COLOURS[type];
    }
  }

  setCatch() {
    this.apiService.catchPokemon(this.pokemon).subscribe((res) =>
      this.showSuccess({
        title: "Pokemon Caught!",
        message: `${this.pokemon.name.toUpperCase()} has been sent to the PC.`,
      })
    );
  }

  showSuccess(message: Message) {
    this.toastr.success(message.message, message.title);
  }
}
