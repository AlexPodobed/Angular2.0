import { NgModule } from '@angular/core';
import {SharedComponentsModule} from './components/shared.components.module';

@NgModule({
    declarations: [],
    imports: [
        SharedComponentsModule
    ],
    providers: [

    ],
    exports: [
        SharedComponentsModule
    ]
})

export class SharedModule {
}
