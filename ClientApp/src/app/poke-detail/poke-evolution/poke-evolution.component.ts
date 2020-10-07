import { Component, Input, OnInit } from "@angular/core";
import { Chain, Pokemon, TYPE_COLOURS } from "src/app/models/pokemon";
import { PokemonService } from "src/app/services/pokemon.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-poke-evolution",
  templateUrl: "./poke-evolution.component.html",
  styleUrls: ["./poke-evolution.component.scss"],
})
export class PokeEvolutionComponent implements OnInit {
  @Input() evolutions: Chain;
  pokemon$: Observable<Pokemon>;

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    // this.getSinglePokemon(this.evolutions.species.name);
  }

  getSinglePokemon(name: string) {
    this.pokemon$ = this.pokeService.getSinglePokemon(name);
  }

  getTypeColor(type: string) {
    if (type) {
      return TYPE_COLOURS[type];
    }
  }
}
