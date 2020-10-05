import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { environment } from "./../../environments/environment";
import { Pokemon, Results, PokeAPI } from "../models/pokemon";

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
      .get<PokeAPI>(`${this.pokeAPI}?limit=386`)
      .pipe(catchError(this._handleError));
  }

  getSinglePokemon(name) {
    return this.http
      .get<Pokemon>(`${this.pokeAPI}/${name}`)
      .pipe(catchError(this._handleError));
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
