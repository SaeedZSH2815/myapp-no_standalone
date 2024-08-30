import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackgroundColor]'
})
export class SetBackgroundColorDirective implements AfterViewInit {

  constructor(private render : Renderer2,
              private element : ElementRef
  ) {


  }

  ngAfterViewInit(): void {
      this.render.setStyle(this.element.nativeElement,'background-color','red');
  }
 //

 @HostBinding('style.background-color') background_color? : string;
 @HostBinding('style.color') border_color? : string;

 @HostListener('mouseenter') onMouseEnter(){
  //this.render.setStyle(this.element.nativeElement,'background-color','blue');
   this.background_color = 'blue';

  // this.border_color = 'brown';
    console.log(this.element.nativeElement);
 }

 @HostListener('mouseleave') onMouseLeave(){
   //this.render.setStyle(this.element.nativeElement,'background-color','yellow');
   this.background_color = 'brown';
 }


 @HostListener('click') oclick(){
     //console.log(this.element);
  this.render.setStyle(this.element.nativeElement,'background-color','black');
 }

}
