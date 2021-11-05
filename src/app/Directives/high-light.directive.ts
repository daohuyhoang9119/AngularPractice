import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  @Input() appHighLight = 'green'; //gia tri mac dinh ban dau neu ko co tham so vao
  constructor(private el: ElementRef) {
    // console.log('constructor: highlight directives:', this.appHighLight);
    // el.nativeElement.style.color = this.appHighLight;
    // el.nativeElement.style.fontSize = '30px';
  }
  ngOnInit(): void {
    // console.log(
    //   'ngOnInit constructor: highlight directives:',
    //   this.appHighLight
    // );
    if (!this.appHighLight) {
      this.appHighLight = 'green';
    } //neu chung ta ko dua tham so dau vao thi gia tri ban dau cua appHighLight no se la null
    // console.log(this.el.nativeElement);
    this.el.nativeElement.style.color = this.appHighLight;
  }
}
