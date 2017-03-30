import { Pipe, PipeTransform } from '@angular/core';
import { filter, transform, includes, conforms, toLower } from 'lodash';

@Pipe({
    name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

    transform(list: any[] = [], rule: any) {
        return filter(list, conforms(
            transform(rule, (result: any, value: string, key: string) =>
                result[key] = (t: string) => includes(toLower(t), toLower(value)), {})
        ));
    }
}
