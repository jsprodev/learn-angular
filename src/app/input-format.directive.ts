import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[inputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @Input('inputFormat') format;
  @HostListener('blur') onblur() {
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
      console.log('onBlur is fired: input is converted to lowercase');
    } else {
      this.el.nativeElement.value = value.toUpperCase();
      console.log('onBlur is fired: input is converted to uppercase');
    }
  } 

}
