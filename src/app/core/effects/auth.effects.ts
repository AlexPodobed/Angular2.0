import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { LOGIN_USER, LOGOUT_USER, LOGIN_FAILURE, USER_AUTHENTICATED, LOGOUT_RECEIVED } from '../actions';
import { AuthAPIService } from '../services/auth/auth-api.service';

@Injectable()
export class AuthEffects {
    constructor(private action$: Actions, private authAPI: AuthAPIService) {
    }

    @Effect() login$ = this.action$
        .ofType(LOGIN_USER)
        .map(toPayload)
        .switchMap((payload) => this.authAPI.login(payload.email, payload.password)
            .map((res) => ({ type: USER_AUTHENTICATED, payload: res }))
            .catch(() => Observable.of({ type: LOGIN_FAILURE }))
        );

    @Effect() logout$ = this.action$
        .ofType(LOGOUT_USER)
        .switchMap(() => Observable.of({ type: LOGOUT_RECEIVED }));
}
