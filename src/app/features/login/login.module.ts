import { NgModule } from '@angular/core';

import { LoginFormModule } from './login-form';
import { AuthService } from '../../core/services';

@NgModule({
    declarations: [],
    imports: [
        LoginFormModule
    ],
    providers: [AuthService],
    exports: []
})

export class LoginModule {
}
