import { Action, ActionType, GithubUser, LoadingStatus, User } from '../model/model';

export function loadUserDetailsStart(): Action<User> {
    return {
        type: ActionType.LOAD_USER_DETAILS_START,
        payload: {data: null, status: LoadingStatus.loading}
    };
}

export function loadUserDetailsFailed(err: any): Action<User> {
    return {
        type: ActionType.LOAD_USER_DETAILS_FAILED,
        payload: {data: null, status: LoadingStatus.error},
    };
}

export function loadUserDetailsCompleted(data: GithubUser): Action<User> {
    return {
        type: ActionType.LOAD_USER_DETAILS_COMPLETED,
        payload: {data: data, status: LoadingStatus.ok},
    };
}
