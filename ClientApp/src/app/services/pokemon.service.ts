import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { forkJoin, throwError } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { environment } from "./../../environments/environment";
import { Pokemon, EvoChain, PokeAPI, Species } from "../models/pokemon";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  pokeAPI: any;

  constructor(private http: HttpClient) {
    this.pokeAPI = environment.pokemonURL;
  }

  getAllPokemon() {
    return this.http
      .get<PokeAPI>(`${this.pokeAPI}/pokemon/?limit=151`)
      .pipe(catchError(this._handleError));
  }

  getSinglePokemon(name) {
    return this.http
      .get<Pokemon>(`${this.pokeAPI}/pokemon/${name}`)
      .pipe(catchError(this._handleError));
  }

  getPokemonSpecies(name) {
    return this.http
      .get<Species>(`${this.pokeAPI}/pokemon-species/${name}`)
      .pipe(catchError(this._handleError));
  }

  getEvolutionChain(id) {
    return this.http
      .get<EvoChain>(`${this.pokeAPI}/evolution-chain/${id}`)
      .pipe(catchError(this._handleError));
  }

  getPokemonSpeciesWithEvolutionChainAndPokemon(name) {
    const species = this.getPokemonSpecies(name);
    const evolutions = species.pipe(
      switchMap((spe) =>
        this.getEvolutionChain(spe.evolution_chain.url.split("/").slice(-2)[0])
      )
    );
    const firstPokemon = evolutions.pipe(
      switchMap((evo) => this.getSinglePokemon(evo.chain.species.name))
    );
    return forkJoin([species, evolutions, firstPokemon]);
  }

  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }
}
