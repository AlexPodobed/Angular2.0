import { Pipe, PipeTransform } from '@angular/core';
import { toInteger } from 'lodash';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    private static formatDuration(time: number): string {
        let hours = Math.trunc(time / 60);
        let minutes = time % 60;

        return hours > 0 ? `${hours} h ${minutes} min` : `${minutes} min`;
    }

    transform(time: number = 0) {
        time = toInteger(time);
        return DurationPipe.formatDuration(time);
    }
}
