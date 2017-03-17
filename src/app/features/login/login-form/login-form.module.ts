import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

@NgModule({
    declarations: [LoginFormComponent],
    imports: [
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [LoginFormComponent]
})
export class LoginFormModule {

}
