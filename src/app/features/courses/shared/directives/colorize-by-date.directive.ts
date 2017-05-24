import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[colorizeByDate]'
})
export class ColorizeByDateDirective implements OnInit {
    private static dayOffset: number = 14;
    private static defaultColor: string = '#fff';
    private static greenColor: string = '#8BC34A';
    private static blueColor: string = '#00B0FF';
    @Input('colorizeByDate') public dateTime: number;
    private currentTime: number = new Date().getTime();
    private outdatedOffset: number = this.currentTime - ColorizeByDateDirective.dayOffset * 24 * 60 * 60 * 1000;

    constructor(private el: ElementRef) {
    }

    public ngOnInit(): void {
        this.el.nativeElement.style.borderLeftColor = this.getColor();
    }

    private getColor(): string {
        let color: string;

        if (this.dateTime < this.currentTime && this.dateTime >= this.outdatedOffset) {
            color = ColorizeByDateDirective.greenColor;
        } else if (this.dateTime > this.currentTime) {
            color = ColorizeByDateDirective.blueColor;
        } else {
            color = ColorizeByDateDirective.defaultColor;
        }

        return color;
    }
}
