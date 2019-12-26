import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAutoCompleteAction, LoadCityAction, Next5DaysAction } from '../city/actions/city.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  @ViewChild('auto') auto;
  keyword = 'LocalizedName';
  locations = ['loading'];

  constructor(private state : Store<[]>) {}


  onKey() {
    this.state.dispatch(new GetAutoCompleteAction(this.auto.query));
    this.state.select(state => state).subscribe(data => {
      if(data['city'].user_input) this.locations = data['city'].user_input[0];
    })
  }

  
  getCurrentCity(id : string, name : string){
    name = name.replace(/<[^>]+>/gm, '');
    this.state.dispatch(new LoadCityAction({id, name}));
    this.state.dispatch(new Next5DaysAction(id));
  }

  


}
