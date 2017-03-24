import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService, LoaderBlockService } from '../../../core/services';

@Component({
    selector: 'login-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./login-form.scss')],
    templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
    public loader$: Observable<boolean>;
    public email: string;
    public password: string;

    constructor(private AuthService: AuthService,
                private loaderBlockService: LoaderBlockService,
                private router: Router) {

        this.loader$ = loaderBlockService.loaderStatus$;
        this.password = '';
        this.email = '';
    }

    public isDisabled(): boolean {
        return !this.email || !this.password;
    }

    public login(): void {
        this.loaderBlockService.show();

        this.AuthService.login(this.email, this.password)
            .then(() => this.loaderBlockService.hide())
            .then(() => this.router.navigate(['/courses']))
            .catch(() => this.loaderBlockService.hide());
    }
}
