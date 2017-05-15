import { NgModule } from '@angular/core';
import { DatepickerModule } from './date-picker';
import { DurationInputModule } from './duration-input';
import { AuthorSelectModule } from './author-select';
import { NoResultModule } from './no-results';
import { PaginationModule } from './pagination';
import { ClockModule } from './clock';

@NgModule({
    imports: [
        ClockModule,
        PaginationModule,
        NoResultModule,
        AuthorSelectModule,
        DatepickerModule,
        DurationInputModule
    ],
    exports: [
        ClockModule,
        PaginationModule,
        NoResultModule,
        AuthorSelectModule,
        DatepickerModule,
        DurationInputModule
    ]
})

export class SharedComponentsModule {
}
