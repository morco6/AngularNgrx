import { FavAction, FavActionTypes } from '../actions/favorites.actions';
import { City } from 'src/app/city/city.model';


const initialState : Array<City> = [
    {id: '215854', name: 'Tel Aviv'}
]

export function FavReducer(state : Array<City> = initialState, action : FavAction){
    switch (action.type) {
        
        case FavActionTypes.ADD_FAV_CITY:
            for(let x=0; x<state.length;x++)
                if(state[x].id == action.payload.id) return [...state];
            return [...state, action.payload];


        case FavActionTypes.REMOVE_FAV_CITY:
            return state.filter( fav => fav.id != action.payload );


        case FavActionTypes.CURRENT_FAV_CITY_WEATHER:
            return [];


        case FavActionTypes.CURRENT_FAV_CITY_WEATHER_SUCCESS:
            return [...state, action.payload];


        case FavActionTypes.CURRENT_FAV_CITY_WEATHER_FAILURE:
            return {error: action.payload};

            
        default:
            return state;
    }

}