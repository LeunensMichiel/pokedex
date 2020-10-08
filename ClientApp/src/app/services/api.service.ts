import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Pokemon } from "src/app/models/pokemon";
import { ApiPokemon } from "./../models/api";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getCaughtPokemon() {
    return this.http
      .get(`${this.apiUrl}/Pokemon/`)
      .pipe(catchError(this._handleError));
  }

  catchPokemon(pokemon: Pokemon) {
    const apiPokemon = {
      name: pokemon.name,
      nationalNo: pokemon.id,
      isCaught: true,
      date: new Date().toISOString(),
    };
    return this.http
      .post<ApiPokemon>(`${this.apiUrl}/Pokemon`, apiPokemon)
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
