import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { environment } from "./../../environments/environment";
import { Pokemon } from "../models/pokemon";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  pokeAPI: any;

  constructor(private http: HttpClient) {
    this.pokeAPI = environment.pokemonURL;
  }

  getSinglePokemon() {
    return this.http.get<Pokemon>(`${this.pokeAPI}/3`);
  }
}
