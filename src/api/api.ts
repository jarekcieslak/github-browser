import { loadUsersCompleted, loadUsersFailed, loadUsersStart } from '../actions/users';
import { loadUserDetailsCompleted, loadUserDetailsFailed, loadUserDetailsStart } from '../actions/user';
import { push } from 'connected-react-router';

const BASE_URL = 'https://api.github.com';

export const route = (location: string) => {
    return (dispatch: any) => {
        dispatch(push(location));
    };
};

export const fetchUsers = (page: number = 1) => {
    return (dispatch: any) => {
        dispatch(loadUsersStart());

        return fetch(`${BASE_URL}/users?page=${page}&per_page=100`)
            .then((res) => res.json())
            .then(data => dispatch(loadUsersCompleted(data)))
            .catch(err => dispatch(loadUsersFailed(err)));
    };
};

export const fetchUserDetails = (username: string) => {
    return (dispatch: any) => {
        dispatch(loadUserDetailsStart());
        return fetch(`${BASE_URL}/users/${username}`)
            .then((res) => res.json())
            .then(data => dispatch(loadUserDetailsCompleted(data)))
            .catch(err => dispatch(loadUserDetailsFailed(err)));
    };
};
