import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services';

@Component({
    selector: 'login-form',
    styles: [require('./login-form.scss')],
    templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
    public loading: boolean;
    public email: string;
    public password: string;

    constructor(private AuthService: AuthService, private router: Router) {
        this.email = '';
        this.password = '';
    }

    public isDisabled(): boolean {
        return this.loading || !this.email || !this.password;
    }

    public login(): void {
        this.loading = true;
        this.AuthService.login(this.email, this.password)
            .then(() => this.loading = false)
            .then(() => this.router.navigate(['/courses']));
    }
}
