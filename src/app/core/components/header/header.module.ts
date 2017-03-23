import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { NavbarModule } from '../navbar';

@NgModule({
    declarations: [HeaderComponent],
    imports: [NavbarModule],
    exports: [HeaderComponent]
})
export class HeaderModule {

}
;
