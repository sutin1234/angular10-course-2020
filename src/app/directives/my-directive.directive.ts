import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

export interface IColorOptions {
  defaultColor: string;
  hoverColor: string;
}
@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements OnInit {

  @HostBinding('style.color') myColor: string;
  // @HostBinding('class') myClass: string;
  @Input() public defaultColor: string;
  @Input() public hoverColor: string;
  @Input() colorOptions: IColorOptions;

  constructor(private el: ElementRef, private renderer2: Renderer2) {
    console.log('myDirective work');
     // this.myClass = 'btn btn-default';
  }

  ngOnInit(): void {
    // const div = this.renderer2.createElement('div');
    // const text = this.renderer2.createText('Hello Directive');

    // append text to div
    // this.renderer2.appendChild(div, text);

    // append dev to this element
    // this.renderer2.appendChild(this.el.nativeElement, div);

    // setAttribute
    this.renderer2.setAttribute(this.el.nativeElement, 'name', 'my-text');
    this.renderer2.setAttribute(this.el.nativeElement, 'id', 'my-text-id');
    this.myColor = this.colorOptions?.defaultColor;
  }


  @HostListener('mouseover') onMouseOver(): void {
    // this.myColor = this.colorOptions?.hoverColor;
    // this.addClass('class-over');
    this.setStyle('border', '1px solid red');
  }

  @HostListener('mouseout') onMouseOut(): void {
    // this.myColor = this.colorOptions?.defaultColor;
    // this.removeClass('class-over');
    this.removeStyle('border');
  }

  @HostListener('click') onClick(): void {
    // this.renderer2.removeAttribute(this.el.nativeElement, 'id');
    // this.addClass('class-click');
    this.setProperty('value', 'angular');
  }

  addClass(className: string): void {
    this.renderer2.addClass(this.el.nativeElement, className);
  }
  removeClass(className: string): void {
    this.renderer2.removeClass(this.el.nativeElement, className);
  }
  setStyle(styleName: string, styleValue: string): void {
    this.renderer2.setStyle(this.el.nativeElement, styleName, styleValue);
  }
  removeStyle(styleName: string): void {
    this.renderer2.removeStyle(this.el.nativeElement, styleName);
  }

  setProperty(propName: string, propValue: string): void {
    this.renderer2.setProperty(this.el.nativeElement, propName, propValue);
  }




}
