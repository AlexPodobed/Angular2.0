import { NgModule } from '@angular/core';
import { DatepickerModule } from './date-picker';
import { DurationInputModule } from './duration-input';
import { AuthorSelectModule } from './author-select';
import { NoResultModule } from './no-results';

@NgModule({
    imports: [
        NoResultModule,
        AuthorSelectModule,
        DatepickerModule,
        DurationInputModule
    ],
    exports: [
        NoResultModule,
        AuthorSelectModule,
        DatepickerModule,
        DurationInputModule
    ]
})

export class SharedComponentsModule {
}
