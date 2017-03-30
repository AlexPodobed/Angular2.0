import { NgModule } from '@angular/core';

import { DurationPipe } from './duration/duration.pipe';
import { OrderByPipe } from './orderBy/order-by.pipe';
import { FilterByPipe } from './filterBy/filter-by.pipe';

@NgModule({
    declarations: [
        FilterByPipe,
        DurationPipe,
        OrderByPipe
    ],
    imports: [],
    providers: [FilterByPipe],
    exports: [
        FilterByPipe,
        DurationPipe,
        OrderByPipe
    ]
})
export class PipesModule {

}
