import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class AuthAPIService {
    private static BASE_URL: string = 'http://angular2.getsandbox.com';

    constructor(private http: Http) {

    }

    public login(email: string, password: string) {
        let body = { email, password };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(`${AuthAPIService.BASE_URL}/auth`, body, options)
            .map((res: Response) => res.json());
    }
}
