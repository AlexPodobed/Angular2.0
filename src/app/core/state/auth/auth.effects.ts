import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import * as authActions from './auth.actions';
import { AuthAPIService } from '../../services/auth/auth-api.service';

@Injectable()
export class AuthEffects {
    @Effect() login$ = this.action$
        .ofType(authActions.LOGIN_USER)
        .map(toPayload)
        .switchMap((payload) => this.authAPI.login(payload.email, payload.password)
            .map((res) => ({ type: authActions.USER_AUTHENTICATED, payload: res }))
            .catch(() => Observable.of({ type: authActions.LOGIN_FAILURE }))
        );
    @Effect() logout$ = this.action$
        .ofType(authActions.LOGOUT_USER)
        .switchMap(() => Observable.of({ type: authActions.LOGOUT_RECEIVED }));

    constructor(private action$: Actions, private authAPI: AuthAPIService) {
    }
}
