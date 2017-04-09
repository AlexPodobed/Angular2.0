import { Pipe, PipeTransform } from '@angular/core';

import  { filter } from 'lodash';

@Pipe({
    name: 'skipOutdated'
})
export class SkipOutdatedPipe implements PipeTransform {
    private _timestamp: number;

    get timestamp(): number {
        return new Date().getTime();
    }

    transform(list: any[] = [], rule: string, days: number) {
        return filter(list, item => item[rule] > (this.timestamp - days * 24 * 60 * 60 * 1000))
    }
}
