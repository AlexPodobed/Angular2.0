import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { AuthService, LoaderBlockService } from '../../../core/services';

@Component({
    selector: 'login-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./login-form.scss')],
    templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnDestroy {
    private subscriptions: Subscription[] = [];
    public loader$: Observable<boolean>;
    public email: string;
    public password: string;

    constructor(private AuthService: AuthService,
                private loaderBlockService: LoaderBlockService,
                private router: Router) {

        this.loader$ = loaderBlockService.loaderStatus$;
        this.password = '';
        this.email = '';

        this.subscriptions.push(
            this.AuthService.token$.subscribe((token) => {
                if (token) {
                    this.onSuccess();
                }
            })
        );
    }

    public isDisabled(): boolean {
        return !this.email || !this.password;
    }

    public onSuccess(): void {
        this.loaderBlockService.hide();
        this.router.navigate(['/courses']);
    }

    public login(): void {
        this.loaderBlockService.show();

        this.AuthService.login(this.email, this.password);
    }

    ngOnDestroy(): void {
        this.subscriptions.map((sub) => sub.unsubscribe());
    }
}
