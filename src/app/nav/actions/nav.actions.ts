import { Action } from '@ngrx/store';

export enum NavActionTypes{
    TOGGLE_UNIT = '[NAV] toggle unit'
}

export class ToggleUnitAction implements Action{
    readonly type = NavActionTypes.TOGGLE_UNIT;
    constructor(){}
}


export type NavAction = ToggleUnitAction;