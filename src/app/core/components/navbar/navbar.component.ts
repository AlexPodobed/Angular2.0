import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }   from 'rxjs';

import { AuthService } from '../../services';
import { IUser } from '../../entities';

@Component({
    selector: 'app-navbar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./navbar.component.scss')],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
    public user$: Observable<IUser>;
    public opened: boolean;

    constructor(private AuthService: AuthService,
                private router: Router) {
        this.opened = false;
    }

    ngOnInit() {
        this.user$ = this.AuthService.userInfo$;
    }

    public onLogout(e): void {
        e.preventDefault();

        this.AuthService.logout()
            .then(() => this.router.navigate(['/login']));
    }

    public toggleMenu(): void {
        this.opened = !this.opened;
    }
}
