import { Action } from '@ngrx/store';
import { City, Day } from '../city.model';

export enum CityActionTypes{
    LOAD_CITY = '[CITY] current city weather',
    LOAD_CITY_SUCCESS = '[CITY] current city weather success',
    LOAD_CITY_FAILURE = '[CITY] current city weather failure',
    LOAD_NEXT_DAYS = '[CITY] next 5 days weather',
    LOAD_NEXT_DAYS_SUCCESS = '[CITY] next 5 days weather success',
    LOAD_NEXT_DAYS_FAILURE = '[CITY] next 5 days weather failure',
    LOAD_AUTO_COMPLETE = '[CITY] autocomplete list',
    LOAD_AUTO_COMPLETE_SUCCESS = '[CITY] autocomplete list success',
    LOAD_AUTO_COMPLETE_FAILURE = '[CITY] autocomplete list failure',
}

export class LoadCityAction implements Action{
    readonly type = CityActionTypes.LOAD_CITY;
    constructor(public payload: {id:string, name:string}){}
}

export class LoadCitySuccessAction implements Action{
    readonly type = CityActionTypes.LOAD_CITY_SUCCESS;
    constructor(public payload: City){}
}

export class LoadCityFailureAction implements Action{
    readonly type = CityActionTypes.LOAD_CITY_FAILURE;
    constructor(public payload: Error){}
}

/* Next 5 Days Forecast */

export class Next5DaysAction implements Action{
    readonly type = CityActionTypes.LOAD_NEXT_DAYS;
    constructor(public payload: string){}
}

export class Next5DaysSuccessAction implements Action{
    readonly type = CityActionTypes.LOAD_NEXT_DAYS_SUCCESS;
    constructor(public payload: Array<Day>){}
}

export class Next5DaysFailureAction implements Action{
    readonly type = CityActionTypes.LOAD_NEXT_DAYS_FAILURE;
    constructor(public payload: Error){}
}

/* Get AutoComplete */ 

export class GetAutoCompleteAction implements Action{
    readonly type = CityActionTypes.LOAD_AUTO_COMPLETE;
    constructor(public payload: string){}
}

export class GetAutoCompleteSuccessAction implements Action{
    readonly type = CityActionTypes.LOAD_AUTO_COMPLETE_SUCCESS;
    constructor(public payload: [Object]){}
}

export class GetAutoCompleteFailureAction implements Action{
    readonly type = CityActionTypes.LOAD_AUTO_COMPLETE_FAILURE;
    constructor(public payload: Error){}
}


export type CityAction = LoadCityAction
| LoadCitySuccessAction
| LoadCityFailureAction
| Next5DaysAction
| Next5DaysSuccessAction
| Next5DaysFailureAction
| GetAutoCompleteAction
| GetAutoCompleteSuccessAction
| GetAutoCompleteFailureAction;