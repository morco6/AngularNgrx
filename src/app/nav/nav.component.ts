import { Component, OnInit } from '@angular/core';
import { Nav } from './reducers/nav.reducer';
import { Store } from '@ngrx/store';
import { ToggleUnitAction } from './actions/nav.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  

  constructor(private store: Store<Nav>) { }

  ngOnInit() {}

  unitToggle(){
    this.store.dispatch(new ToggleUnitAction());
  }

}
