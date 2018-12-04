import createReducer from './createReducer';
import { Action, ActionType, Users } from '../model/model';

const initialState = {
    status: null,
    data: []
};
export const userDetailsReducer = createReducer(initialState, {
    [ActionType.LOAD_USER_DETAILS_START](state: Users, action: Action<Users>) {
        return {...state, ...action.payload};
    },
    [ActionType.LOAD_USER_DETAILS_FAILED](state: Users, action: Action<Users>) {
        return {...state, ...action.payload};
    },
    [ActionType.LOAD_USER_DETAILS_COMPLETED](state: Users, action: Action<Users>) {
        return {...state, ...action.payload};
    },
});
