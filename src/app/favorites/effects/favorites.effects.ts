import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from 'src/app/data.service';
import { currentCityResponse } from '../../city/effects/city.effects.helper';
import { mergeMap, map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
import { CurrentFavCityAction, FavActionTypes, CurrentFavCityActionSuccess, CurrentFavCityActionFailure } from '../actions/favorites.actions';

@Injectable()
export class FavEffects{


    @Effect() currentFavs$ = this.actions$.pipe(
        ofType<CurrentFavCityAction>(FavActionTypes.CURRENT_FAV_CITY_WEATHER), mergeMap(
            action => this.favService.getCurrentWeather(action.payload.id).pipe(
                    map(res => new CurrentFavCityActionSuccess(
                        currentCityResponse(
                            res[0], action.payload.id, action.payload.name))),
                    catchError(error => of(new CurrentFavCityActionFailure(error)))
                ))
    );
    
        
    constructor(private actions$: Actions, private favService: DataService){}
}