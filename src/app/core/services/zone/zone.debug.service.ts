import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class DebugZoneService {
    private unstableTimestamp: number;

    static get timestamp(): number {
        return new Date().getTime();
    }

    constructor(private ngZone: NgZone) {
        console.info('DebugService initialized');
        this.unstableTimestamp = DebugZoneService.timestamp;
    }

    get stableTimestamp(): number {
        return DebugZoneService.timestamp - this.unstableTimestamp;
    }

    private onZoneStable(): void {
        console.log(`[zone-stable] change took ${this.stableTimestamp} ms`);
    }

    private onZoneUnstable(): void {
        // console.log(`[zone-unstable] change started`);
        this.unstableTimestamp = DebugZoneService.timestamp;
    }

    private onZoneError(err: any): void {
        console.log(`[zone-error] change ${err.toString()}`);
    }

    public init(): void {
        this.ngZone.onStable.subscribe(this.onZoneStable.bind(this));
        this.ngZone.onUnstable.subscribe(this.onZoneUnstable.bind(this));
        this.ngZone.onError.subscribe(this.onZoneError.bind(this));
    }
}
