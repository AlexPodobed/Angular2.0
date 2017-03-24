import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LogoModule } from '../logo';
import { AuthService } from '../../services';

@NgModule({
    declarations: [
        NavMenuComponent,
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        LogoModule
    ],
    exports: [NavbarComponent],
    providers: [AuthService]
})
export class NavbarModule {

}
