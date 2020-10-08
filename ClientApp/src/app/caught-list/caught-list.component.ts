import { Component, OnInit } from "@angular/core";
import { ApiPokemon } from "./../models/api";
import { ApiService } from "./../services/api.service";

@Component({
  selector: "app-caught-list",
  templateUrl: "./caught-list.component.html",
  styleUrls: ["./caught-list.component.scss"],
})
export class CaughtListComponent implements OnInit {
  caughtPokemon: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllCaughtPokemon();
  }

  getAllCaughtPokemon() {
    this.apiService
      .getCaughtPokemon()
      .subscribe((res) => (this.caughtPokemon = res));
  }
}
