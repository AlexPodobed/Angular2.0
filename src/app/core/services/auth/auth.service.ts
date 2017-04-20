import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { IUser, IToken, IAuthResponse } from '../../entities';
import { StorageService } from '../storage/storage.service';
import { AuthHelper } from './auth-helper.service';

@Injectable()
export class AuthService {
    private static AUTH_USER_KEY: string = 'user';
    private static AUTH_TOKEN_KEY: string = 'token';
    private static BASE_URL: string = 'http://angular2.getsandbox.com';

    private authUrl: string;
    private authStateSource: BehaviorSubject<IUser>;
    private _user: IUser;
    private _token: IToken;

    public userInfo$: Observable<IUser>;

    constructor(private storage: StorageService, private http: Http) {
        this.authStateSource = new BehaviorSubject(this.user);
        this.userInfo$ = this.authStateSource.asObservable();
        this.authUrl = `${AuthService.BASE_URL}/auth`;
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

    public onSuccessLogin(res: IAuthResponse):void{
        console.log('success login')
        this.user = res.user;
        this.token = res.token;

        this.authStateSource.next(this.user);
    }

    // deprecated
    public login(email: string, password: string): Promise<any> {
        return AuthHelper.fakeLoginRequest(email, password)
            .then(({ user, token }: IAuthResponse) => {
                this.user = user;
                this.token = token;

                this.authStateSource.next(this.user);
            });
    }


    public loginUpdated(email: string, password: string): Observable<IAuthResponse> {
        let body = {email, password};
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        return this.http.post(this.authUrl, body, options)
            .map((res:Response) => res.json())
            .do((res: IAuthResponse) => this.onSuccessLogin(res))
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
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
