import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { IUser, IToken, IAuthResponse } from '../../entities';
import { StorageService } from '../storage/storage.service';
import { AuthHelper } from './auth-helper.service';

@Injectable()
export class AuthService {
    private static AUTH_USER_KEY: string = 'user';
    private static AUTH_TOKEN_KEY: string = 'token';

    private authStateSource: BehaviorSubject<IUser>;
    private _user: IUser;
    private _token: IToken;

    public userInfo$: Observable<IUser>;

    constructor(private storage: StorageService) {
        this.authStateSource = new BehaviorSubject(this.user);
        this.userInfo$ = this.authStateSource.asObservable();
    }

    set user(user: IUser) {
        this._user = user;

        this.storage.set(AuthService.AUTH_USER_KEY, user);
    }

    get user(): IUser {
        if (!this._user) {
            this._user = this.storage.get(AuthService.AUTH_USER_KEY);
        }
        return this._user;
    }

    set token(token: IToken) {
        this._token = token;
        this.storage.set(AuthService.AUTH_TOKEN_KEY, token);
    }

    get token(): IToken {
        if (!this._token) {
            this._token = this.storage.get(AuthService.AUTH_TOKEN_KEY);
        }
        return this._token;
    }

    public login(email: string, password: string): Promise<any> {
        return AuthHelper.fakeLoginRequest(email, password)
            .then(({ user, token }: IAuthResponse) => {
                this.user = user;
                this.token = token;

                this.authStateSource.next(this.user);
            });
    }

    public logout(): Promise<any> {
        return Promise.resolve()
            .then(() => {
                this.user = null;
                this.token = null;

                this.authStateSource.next(this.user);
            });
    }

    public isAuthenticated(): boolean {
        return Boolean(this.user) && Boolean(this.token);
    }
}
