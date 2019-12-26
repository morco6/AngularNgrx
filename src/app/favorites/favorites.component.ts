import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveFavCityAction, CurrentFavCityAction } from './actions/favorites.actions';
import { City } from '../city/city.model';
import { Observable } from 'rxjs';
import { Nav } from '../nav/reducers/nav.reducer';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})


export class FavoritesComponent implements OnInit {

  private favorites: Array<City>;
  favs$ : Observable<Array<City>>;
  unit$ : Observable<boolean>;

  constructor(private store : Store<City>, private unitStore: Store<Nav>) {this.favorites = []}


  ngOnInit() {
    this.favs$ = this.store.select(state => state['favorites']);
    this.store.select(state => state).subscribe( data=> this.favorites = data['favorites']).unsubscribe();
    this.currentFavWeather();
    this.unit$ = this.unitStore.select(state=>state['nav'].unit);
  }


  currentFavWeather(){
      this.favorites.forEach(fav =>{
        this.store.dispatch(new CurrentFavCityAction(fav));
      })
  }


  removeFav(id : string){
    this.store.dispatch(new RemoveFavCityAction(id));
  }

}
