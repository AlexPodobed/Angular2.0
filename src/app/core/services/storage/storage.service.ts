import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    public save(key: string, value: any): void {
        if (value === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    public get(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }
}
