import { NgModule } from '@angular/core';
import { DatepickerModule } from './date-picker';
import { DurationInputModule } from './duration-input';
import { AuthorSelectModule } from './author-select';
import { NoResultModule } from './no-results';
import { PaginationModule } from './pagination';

@NgModule({
    imports: [
        PaginationModule,
        NoResultModule,
        AuthorSelectModule,
        DatepickerModule,
        DurationInputModule
    ],
    exports: [
        PaginationModule,
        NoResultModule,
        AuthorSelectModule,
        DatepickerModule,
        DurationInputModule
    ]
})

export class SharedComponentsModule {
}
