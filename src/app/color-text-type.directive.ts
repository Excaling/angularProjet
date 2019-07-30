import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive(
    {selector: '[tlTextTypeColor]'}
)
export class TextTypeColor {
    
    private initialColor: string = "#FFFFFF";
    constructor(private el: ElementRef, private renderer: Renderer2){
        this.setTextColor(this.initialColor);
    }

    private setTextColor(pColor: string){
        this.renderer.setStyle(this.el.nativeElement, 'color', this.initialColor) ;
    }
} 