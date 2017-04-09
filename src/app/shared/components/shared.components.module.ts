import { NgModule } from '@angular/core';
import { DatepickerModule } from './date-picker';
import { DurationInputModule } from './duration-input'
import { AuthorSelectModule } from './author-select';


@NgModule({
    imports: [
        AuthorSelectModule,
        DatepickerModule,
        DurationInputModule
    ],
    exports: [
        AuthorSelectModule,
        DatepickerModule,
        DurationInputModule
    ]
})

export class SharedComponentsModule {
}
