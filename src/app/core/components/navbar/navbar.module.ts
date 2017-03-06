import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar.component';
import {LogoModule} from '../logo';

@NgModule({
    declarations: [NavbarComponent],
    imports: [RouterModule, LogoModule],
    exports: [NavbarComponent]
})
export class NavbarModule {

}
