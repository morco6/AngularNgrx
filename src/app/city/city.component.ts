import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CityState } from './reducers/city.reducer';
import { LoadCityAction, Next5DaysAction } from './actions/city.actions';
import { City } from './city.model';
import { AddFavCityAction } from '../favorites/actions/favorites.actions';
import { Observable } from 'rxjs';
import { Nav } from '../nav/reducers/nav.reducer';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit {

  private city: City;
  unit$: Observable<boolean>;

  
  constructor(private store: Store<CityState>, private unitStore: Store<Nav>) { }


  ngOnInit() {
    this.getCurrentCity('215854', 'Tel Aviv');
    this.store.select(state => state).subscribe(data => this.city = data.city);
    this.unit$ = this.unitStore.select(state => state['nav'].unit);
   }


  getCurrentCity(id: string, name: string) {
      this.store.dispatch(new LoadCityAction({ id, name }));
      this.store.dispatch(new Next5DaysAction(id));
  }


  addToFav(new_fav: City = null) {
    this.store.dispatch(new AddFavCityAction({ id: new_fav.id, name: new_fav.name }));
  }


}
