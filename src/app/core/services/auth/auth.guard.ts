import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {

    }

    canActivate(): Observable<boolean> {
        return this.authService.token$.map((token) => !_.isEmpty(token))
    }
}
