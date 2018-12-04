import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { User, Users } from '../model/model';
import { userReducer } from './users';
import { userDetailsReducer } from './userDetails';

export interface RootState {
    users: Users;
    details: User;
}

export default (history: History) => combineReducers({
    router: connectRouter(history),
    users: userReducer,
    details: userDetailsReducer
});