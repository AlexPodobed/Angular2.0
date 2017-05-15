import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable }   from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { IUser } from '../../entities';

@Component({
    selector: 'app-navbar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./navbar.component.scss')],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {

    private tokenSub: Subscription;
    public user$: Observable<IUser>;
    public opened: boolean;

    constructor(private AuthService: AuthService,
                private router: Router) {
        this.opened = false;

        this.tokenSub = this.AuthService.token$.subscribe((token) => {
            if (!token) {
                this.router.navigate(['/login']);
            }
        });
    }

    ngOnInit() {
        this.user$ = this.AuthService.user$;
    }

    ngOnDestroy(): void {
        this.tokenSub.unsubscribe();
    }

    public onLogout(e): void {
        e.preventDefault();

        this.AuthService.logout();
    }

    public toggleMenu(): void {
        this.opened = !this.opened;
    }
}
