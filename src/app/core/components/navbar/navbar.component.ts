import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription }   from 'rxjs/Subscription';

import { AuthService } from '../../services';
import { IUser } from '../../entities';

@Component({
    selector: 'app-navbar',
    styles: [require('./navbar.component.scss')],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    public opened: boolean;
    public isLoggedin: boolean;
    public user: IUser;

    constructor(private AuthService: AuthService, private router: Router) {
        this.opened = false;
    }

    ngOnInit() {
        this.updateAuthInfo();
        this.subscription = this.AuthService.authState$.subscribe(this.updateAuthInfo.bind(this));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


    private updateAuthInfo(): void {
        this.isLoggedin = this.AuthService.isAuthenticated();
        this.user = this.AuthService.user;
    }

    public logout(e): void {
        e.preventDefault();

        this.AuthService.logout()
            .then(() => this.router.navigate(['/login']));
    }

    public toggleMenu(): void {
        this.opened = !this.opened;
    }
}
