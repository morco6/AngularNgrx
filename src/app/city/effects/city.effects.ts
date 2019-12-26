import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CityActionTypes, LoadCityAction, LoadCitySuccessAction, LoadCityFailureAction, Next5DaysAction, Next5DaysSuccessAction, Next5DaysFailureAction, GetAutoCompleteAction, GetAutoCompleteSuccessAction, GetAutoCompleteFailureAction } from '../actions/city.actions';
import { DataService } from 'src/app/data.service';
import { currentCityResponse, daysResponse } from './city.effects.helper';
import { mergeMap, map, catchError, tap} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CityEffects{


    @Effect() loadCity$ = this.actions$.pipe(
        ofType<LoadCityAction>(CityActionTypes.LOAD_CITY), mergeMap(
            action => this.cityService.getCurrentWeather(action.payload.id).pipe(
                    map(res => new LoadCitySuccessAction(
                        currentCityResponse(
                            res[0], action.payload.id, action.payload.name))),
                    catchError(error => of(new LoadCityFailureAction(error)))
                ))
    );


    @Effect() loadNextDays$ = this.actions$.pipe(
        ofType<Next5DaysAction>(CityActionTypes.LOAD_NEXT_DAYS), mergeMap(
            action => this.cityService.getNext5days(action.payload).pipe(
                map(res => new Next5DaysSuccessAction(daysResponse(res['DailyForecasts']))),
                    catchError(error => of(new Next5DaysFailureAction(error)))
                ))
    );


    @Effect() loadLocationID$ = this.actions$.pipe(
        ofType<GetAutoCompleteAction>(CityActionTypes.LOAD_AUTO_COMPLETE), mergeMap(
            action => this.cityService.getLocationId(action.payload).pipe(
                map(res => new GetAutoCompleteSuccessAction([res])),
                    catchError(error => of(new GetAutoCompleteFailureAction(error))),
                )));
        
    constructor(private actions$: Actions, private cityService: DataService){}
}