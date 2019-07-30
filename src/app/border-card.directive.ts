import { Directive, ElementRef, HostListener, Input } from '@angular/core';

//HostListener sert à catch des elements 

//ElementRef: element du dom sur le quel on applique notre directive

@Directive({
  selector: '[tlBorderCard]' //s'applique à tout element du dom qui on en attribut la directive (sans crocher = s'applique a tout les balises)
})
export class BorderCardDirective {

    private initialColor: string = "#f5f5f5";
    private defaultColor: string = "#009688";
    private defaultHeight: number = 180;

	constructor(private el: ElementRef) { //Acces a l'element du dom via le constructeur 
		this.setBorder(this.initialColor);
		this.setHeight(this.defaultHeight);
	}

    @Input('tlBorderCard') borderColor: string;

    @HostListener('mouseenter') onMouseEnter(){
        this.setBorder(this.borderColor || this.defaultColor);

    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setBorder(this.initialColor);
    }

	private setBorder(color: string) {
		let border = 'solid 4px ' + color;
		this.el.nativeElement.style.border = border;
	}

	private setHeight(height: number) {
		this.el.nativeElement.style.height = height + 'px';
    }
    

}