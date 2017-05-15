import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { IUser, IToken, IAuthResponse } from '../../entities';
import { logoutAction, loginAction } from '../../actions';

@Injectable()
export class AuthService {
    private store$;

    public error$: Observable<any>;
    public token$: Observable<IToken>;
    public user$: Observable<IUser>;

    constructor(private store: Store<any>) {
        this.store$ = this.store.select<IAuthResponse>('auth');

        this.error$ = this.store$.map((data) => data['error']);
        this.token$ = this.store$.map((data) => data['token']);
        this.user$ = this.store$.map((data) => data['user']);
    }

    public login(email: string, password: string) {
        this.store$.dispatch(loginAction({ email, password }));
    }

    public logout() {
        this.store$.dispatch(logoutAction());
    }
}
