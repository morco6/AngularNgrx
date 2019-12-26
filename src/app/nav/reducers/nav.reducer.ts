import { NavAction, NavActionTypes } from '../actions/nav.actions';

export interface Nav{
    unit : boolean,
}

const initialState : Nav = {
    unit : true, 
}

export function NavReducer(state : Nav = initialState, action : NavAction){
    switch (action.type) {
        
        case NavActionTypes.TOGGLE_UNIT:
            return {unit: !(state.unit)};

        default:
            return state;
    }

}