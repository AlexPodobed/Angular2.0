import { Pipe, PipeTransform } from '@angular/core';
import { sortBy } from 'lodash';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
    transform(list: any[] = [], rule: string) {
        return sortBy(list, rule);
    }
}
