import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  @Output() searchChange = new EventEmitter();
  searchString: string;
  constructor() {}

  ngOnInit(): void {}

  onSearch(searchString) {
    if (searchString === "") {
      this.searchString = searchString;
    }
    this.searchChange.emit(this.searchString);
  }
}
