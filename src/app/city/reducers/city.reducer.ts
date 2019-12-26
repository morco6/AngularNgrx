import { CityActionTypes, CityAction } from '../actions/city.actions';
import { City } from '../city.model';

export interface CityState{
    city: City,
    loading: Boolean,
    error: Error
}

export function CityReducer(state : CityState, action : CityAction){
    switch (action.type) {
        case CityActionTypes.LOAD_CITY:
            return {...state, loading: true,};

        case CityActionTypes.LOAD_CITY_SUCCESS:
            return {...state, current_city: action.payload, loading: false,};

        case CityActionTypes.LOAD_CITY_FAILURE:
            return {...state, error: action.payload.message,};

        case CityActionTypes.LOAD_NEXT_DAYS:
            return {...state, loading: true,};

        case CityActionTypes.LOAD_NEXT_DAYS_SUCCESS:
            return {...state, five_days_forecast: action.payload, loading: false,};

        case CityActionTypes.LOAD_NEXT_DAYS_FAILURE:
            return {...state, error: action.payload.message,};

        case CityActionTypes.LOAD_AUTO_COMPLETE:
            return {...state, loading: true,};

        case CityActionTypes.LOAD_AUTO_COMPLETE_SUCCESS:
            return {...state, user_input: action.payload, loading: false,};

        case CityActionTypes.LOAD_AUTO_COMPLETE_FAILURE:
            return {...state, error: action.payload.message,};

        default:
            return state;
    }

}