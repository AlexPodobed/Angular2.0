import { Action } from '@ngrx/store';

import { IAuthResponse } from '../../entities';
import { StorageService } from '../../services/storage/storage.service';
import * as authActions from './auth.actions';

const initialState: IAuthResponse = StorageService.get('auth') || { user: null, token: null, error: null };

export const auth = (state = initialState, action: Action = { type: authActions.INIT }) => {
    switch (action.type) {
        case authActions.LOGIN_USER:
            return Object.assign({}, state);
        case authActions.USER_AUTHENTICATED:
            return Object.assign({}, state, {
                token: action.payload.token,
                user: action.payload.user
            });
        case authActions.LOGOUT_RECEIVED:
            return Object.assign({}, state, {
                error: null,
                user: null,
                token: null
            });
        case authActions.LOGIN_FAILURE:
        case authActions.SIGNUP_FAILURE:
        case authActions.AUTH_TOKEN_EXPIRED:
            return Object.assign({}, state, {
                error: action.payload.error,
                token: null, user: null
            });
        default:
            return state;
    }
};
