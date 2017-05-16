import { Action } from '@ngrx/store';

import { IAuthResponse } from '../entities';
import { StorageService } from '../services/storage/storage.service';
import {
    LOGIN_USER,
    LOGIN_FAILURE,
    USER_AUTHENTICATED,
    LOGOUT_RECEIVED,
    SIGNUP_FAILURE,
    AUTH_TOKEN_EXPIRED,
    INIT
} from '../actions/auth.actions';

const initialState: IAuthResponse = StorageService.get('auth') || { user: null, token: null, error: null };

export const auth = (state = initialState, action: Action = { type: INIT }) => {
    switch (action.type) {
        case LOGIN_USER:
            return Object.assign({}, state);
        case USER_AUTHENTICATED:
            return Object.assign({}, state, {
                token: action.payload.token,
                user: action.payload.user
            });
        case LOGOUT_RECEIVED:
            return Object.assign({}, state, {
                error: null,
                user: null,
                token: null
            });
        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
        case AUTH_TOKEN_EXPIRED:
            return Object.assign({}, state, {
                error: action.payload.error,
                token: null, user: null
            });
        default:
            return state;
    }
};
