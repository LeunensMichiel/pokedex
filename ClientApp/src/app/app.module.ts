import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { SearchPipe } from "./pipes/search.pipe";
import { SearchComponent } from "./search/search.component";
import { PokeDetailComponent } from "./poke-detail/poke-detail.component";
import { PokeEvolutionComponent } from "./poke-detail/poke-evolution/poke-evolution.component";
import { CaughtListComponent } from "./caught-list/caught-list.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SearchPipe,
    SearchComponent,
    PokeDetailComponent,
    PokeEvolutionComponent,
    CaughtListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "pokemon/:name", component: PokeDetailComponent },
      { path: "caught", component: CaughtListComponent },
    ]),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
