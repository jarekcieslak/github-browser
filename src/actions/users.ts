import { Action, ActionType, GithubUser, LoadingStatus, Users } from '../model/model';

export function loadUsersStart(): Action<Users> {
    return {
        type: ActionType.LOAD_USERS_START,
        payload: {data: [], status: LoadingStatus.loading}
    };
}

export function loadUsersFailed(err: any): Action<Users> {
    return {
        type: ActionType.LOAD_USERS_FAILED,
        payload: {data: [], status: LoadingStatus.error},
    };
}

export function loadUsersCompleted(data: GithubUser[]): Action<Users> {
    return {
        type: ActionType.LOAD_USERS_COMPLETED,
        payload: {data: data, status: LoadingStatus.ok},
    };
}
