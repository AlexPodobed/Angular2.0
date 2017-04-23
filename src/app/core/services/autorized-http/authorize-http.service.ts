import { Injectable } from '@angular/core';
import { Http, RequestOptions, XHRBackend } from '@angular/http';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class AuthorizedHttp extends Http{
    constructor (authService: AuthService,
                 backend: XHRBackend,
                 options: RequestOptions) {
        let token = authService.token;
        options.headers.set('Authorization', `Bearer ${token.access_token}`);
        super(backend, options);
    }
}
