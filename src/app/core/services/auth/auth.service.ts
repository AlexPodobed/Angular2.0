import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { IUser, IToken } from '../../entities';
import { StorageService } from '../storage/storage.service';

interface IAuthResponse {
    user: IUser;
    token: IToken;
}

@Injectable()
export class AuthService {
    public authState$: Observable<IAuthResponse>;

    private authStateSource: Subject<IAuthResponse>;
    private AUTH_USER_KEY: string = 'user';
    private AUTH_TOKEN_KEY: string = 'token';
    private _user: IUser;
    private _token: IToken;

    constructor(private storage: StorageService) {
        this.authStateSource = new Subject();
        this.authState$ = this.authStateSource.asObservable();
    }

    set user(user: IUser) {
        this._user = user;

        this.storage.save(this.AUTH_USER_KEY, user);
    }

    get user(): IUser {
        if (!this._user) {
            this._user = this.storage.get(this.AUTH_USER_KEY);
        }
        return this._user;
    }

    set token(token: IToken) {
        this._token = token;
        this.storage.save(this.AUTH_TOKEN_KEY, token);
    }

    get token(): IToken {
        if (!this._token) {
            this._token = this.storage.get(this.AUTH_TOKEN_KEY);
        }
        return this._token;
    }

    private get uuid(): string {
        /* tslint:disable */
        return 'xxxxxxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        /* tslint:enable */
    }

    private getUserMock(email: string, password: string): IUser {
        return {
            email,
            password,
            id: this.uuid
        };
    }

    private getTokenMock(): IToken {
        return {
            access_token: this.uuid,
            refresh_token: this.uuid,
            token_type: 'bearer',
            expires_in: 3600
        };
    }

    private makeLoginRequest(email: string, password: string): Promise<IAuthResponse> {
        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve({
                    user: this.getUserMock(email, password),
                    token: this.getTokenMock()
                });
            }, 400);
        });
    }

    public login(email: string, password: string): Promise<any> {
        return this.makeLoginRequest(email, password)
            .then(({ user, token }: IAuthResponse) => {
                this.user = user;
                this.token = token;

                this.authStateSource.next({ user, token });
            });
    }

    public logout(): Promise<any> {
        return Promise.resolve()
            .then(() => {
                this.user = null;
                this.token = null;

                this.authStateSource.next({ user: null, token: null });
            });
    }

    public isAuthenticated(): boolean {
        return Boolean(this.user) && Boolean(this.token);
    }
}
