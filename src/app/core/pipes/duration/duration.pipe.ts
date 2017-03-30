import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {

    private formatDuration(time: number): string {
        let hours = Math.trunc(time / 60);
        let minutes = time % 60;

        return hours > 0 ? `${hours} h ${minutes} min` : `${minutes} min`;
    }

    transform(time: number = 0) {
        return this.formatDuration(time);
    }
}
