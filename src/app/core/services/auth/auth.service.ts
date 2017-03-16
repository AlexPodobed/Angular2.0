import { Injectable } from '@angular/core';
import { IUser, IToken } from '../../entities';

interface IAuthResponse {
    user: IUser;
    token: IToken;
};

@Injectable()
export class AuthService {
    private AUTH_USER_KEY: string = 'user';
    private AUTH_TOKEN_KEY: string = 'token';
    private _user: IUser;
    private _token: IToken;
    private storage: any;

    constructor() {
        console.log('Auth service initialized');
        this.storage = localStorage;
    }

    set user(user: IUser) {
        this._user = user;

        if (user === null) {
            this.storage.removeItem(this.AUTH_USER_KEY);
        } else {
            this.storage.setItem(this.AUTH_USER_KEY, JSON.stringify(user));
        }
    }

    get user(): IUser {
        if (!this._user) {
            this._user = JSON.parse(this.storage.getItem(this.AUTH_USER_KEY));
        }
        return this._user;
    }

    set token(token: IToken) {
        this._token = token;
        if (token === null) {
            this.storage.removeItem(this.AUTH_TOKEN_KEY);
        } else {
            this.storage.setItem(this.AUTH_TOKEN_KEY, JSON.stringify(token));
        }
    }

    get token(): IToken {
        if (!this._token) {
            this._token = JSON.parse(this.storage.getItem(this.AUTH_TOKEN_KEY));
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
        return Promise.resolve({
            user: this.getUserMock(email, password),
            token: this.getTokenMock()
        });
    }

    public login(email: string, password: string): Promise<any> {
        return this.makeLoginRequest(email, password)
            .then(({ user, token }: IAuthResponse) => {
                this.user = user;
                this.token = token;
            });
    }

    public logout(): Promise<any> {
        return Promise.resolve()
            .then(() => {
                this.user = null;
                this.token = null;
            });
    }

    public isAuthenticated(): boolean {
        return Boolean(this._user) && Boolean(this._token);
    }
}
