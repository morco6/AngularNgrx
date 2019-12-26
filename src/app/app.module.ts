import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { SearchComponent } from './search/search.component';
import { StoreModule } from '@ngrx/store';
import { CityReducer } from './city/reducers/city.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CityEffects } from './city/effects/city.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavReducer } from './favorites/reducers/favorites.reducer';
import { FavEffects } from './favorites/effects/favorites.effects';
import { NavReducer } from './nav/reducers/nav.reducer';


const appRoutes: Routes = [
  { path: 'favorites',
    component: FavoritesComponent },
  { path: '',
    component: CityComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CityComponent,
    SearchComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false,} // <-- debugging purposes only
    ),
    StoreModule.forRoot({
      city: CityReducer,
      favorites: FavReducer,
      nav: NavReducer 
    }),
    EffectsModule.forRoot([CityEffects, FavEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
