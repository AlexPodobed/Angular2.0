import { NgModule } from '@angular/core';
import { DurationInputComponent } from './duration-input.component';
import { FormsModule } from '@angular/forms';

import { PipesModule } from '../../../core/pipes';

@NgModule({
    declarations: [DurationInputComponent],
    imports: [
        PipesModule,
        FormsModule
    ],
    exports: [DurationInputComponent]
})
export class DurationInputModule {

}
