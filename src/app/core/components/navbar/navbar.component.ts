import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
    selector: 'app-navbar',
    styles: [require('./navbar.component.scss')],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    public opened: boolean;

    constructor(private AuthService: AuthService) {
        this.opened = false;

        console.log(AuthService.isAuthenticated());
    }

    public toggleMenu(): void {
        this.opened = !this.opened;
    }
}
