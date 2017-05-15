import { NgModule } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './pagination.component';

@NgModule({
    imports: [CommonModule, NgbPaginationModule],
    declarations: [PaginationComponent],
    exports: [PaginationComponent]
})
export class PaginationModule {

}
