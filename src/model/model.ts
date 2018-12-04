export enum ActionType {
    LOAD_USERS_START = 'LOAD_USERS_START',
    LOAD_USERS_FAILED = 'LOAD_USERS_FAILED',
    LOAD_USERS_COMPLETED = 'LOAD_USERS_COMPLETED',

    LOAD_USER_DETAILS_START = 'LOAD_USER_DETAILS_START',
    LOAD_USER_DETAILS_FAILED = 'LOAD_USER_DETAILS_FAILED',
    LOAD_USER_DETAILS_COMPLETED = 'LOAD_USER_DETAILS_COMPLETED'
}

export interface User {
    status: LoadingStatus;
    data?: GithubUser | null;
}

export interface Users {
    status: LoadingStatus;
    data: GithubUser[];
}

export interface GithubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface GithubUserDetails {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email?: any;
    hireable?: any;
    bio: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}

export enum LoadingStatus {
    'error' = 'error',
    'loading' = 'loading',
    'ok' = 'ok'
}

export interface Action<T> {
    type: ActionType;
    payload: T;
}