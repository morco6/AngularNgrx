import { Action } from '@ngrx/store';
import { City } from 'src/app/city/city.model';

export enum FavActionTypes{
    ADD_FAV_CITY = '[FAV] added to favorites',
    REMOVE_FAV_CITY = '[FAV] removed from favorites',
    CURRENT_FAV_CITY_WEATHER = '[FAV] favorites current weather',
    CURRENT_FAV_CITY_WEATHER_SUCCESS = '[FAV] favorites current weather success',
    CURRENT_FAV_CITY_WEATHER_FAILURE = '[FAV] favorites current weather failure',
}


export class AddFavCityAction implements Action{
    readonly type = FavActionTypes.ADD_FAV_CITY;
    constructor(public payload: City){}
}


export class RemoveFavCityAction implements Action{
    readonly type = FavActionTypes.REMOVE_FAV_CITY;
    constructor(public payload: string){}
}


export class CurrentFavCityAction implements Action{
    readonly type = FavActionTypes.CURRENT_FAV_CITY_WEATHER;
    constructor(public payload: City){}
}


export class CurrentFavCityActionSuccess implements Action{
    readonly type = FavActionTypes.CURRENT_FAV_CITY_WEATHER_SUCCESS;
    constructor(public payload: City){}
}


export class CurrentFavCityActionFailure implements Action{
    readonly type = FavActionTypes.CURRENT_FAV_CITY_WEATHER_FAILURE;
    constructor(public payload: Error){}
}


export type FavAction = AddFavCityAction
| RemoveFavCityAction
| CurrentFavCityAction
| CurrentFavCityActionFailure
| CurrentFavCityActionSuccess;