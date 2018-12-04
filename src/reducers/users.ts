import createReducer from './createReducer';
import { Action, ActionType, Users } from '../model/model';

const initialState = {
    status: null,
    data: []
};
export const userReducer = createReducer(initialState, {
    [ActionType.LOAD_USERS_START](state: Users, action: Action<Users>) {
        return {...state, ...action.payload};
    },
    [ActionType.LOAD_USERS_FAILED](state: Users, action: Action<Users>) {
        return {...state, ...action.payload};
    },
    [ActionType.LOAD_USERS_COMPLETED](state: Users, action: Action<Users>) {
        return {...state, ...action.payload};
    },
});
