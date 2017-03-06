import {Component} from '@angular/core';

@Component({
    selector: 'app-navbar',
    styles: [require('./navbar.component.scss')],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    public opened: boolean;

    constructor() {
        this.opened = false;
    }

    public toggleMenu(): void {
        this.opened = !this.opened;
    }
}
