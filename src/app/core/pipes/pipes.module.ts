import { NgModule } from '@angular/core';

import { DurationPipe } from './duration/duration.pipe';
import { OrderByPipe } from './orderBy/order-by.pipe';
import { FilterByPipe } from './filterBy/filter-by.pipe';
import { SkipOutdatedPipe } from './outdated/outdated.pipe';

@NgModule({
    declarations: [
        FilterByPipe,
        DurationPipe,
        OrderByPipe,
        SkipOutdatedPipe
    ],
    imports: [],
    providers: [FilterByPipe],
    exports: [
        FilterByPipe,
        DurationPipe,
        OrderByPipe,
        SkipOutdatedPipe
    ]
})
export class PipesModule {

}
