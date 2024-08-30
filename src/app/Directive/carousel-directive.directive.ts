import { Directive, OnInit, TemplateRef,Input, ViewContainerRef } from '@angular/core';
import { ICarouselContext } from '../Interface/icarousel-context';
@Directive({
  selector: '[appCarouselDirective]'
})


export class CarouselDirectiveDirective implements OnInit {

 context : ICarouselContext | null = null;
  Index : number = 0;
 @Input() imageList : string[] = [];

 constructor(private template : TemplateRef<ICarouselContext>,
             private viewContainerRef : ViewContainerRef
  ) { }

 ngOnInit(): void {
   this.context = {
    $implicit : this.imageList[0],
    controller:{
      next:()=>this.next,
      pre:()=>this.pre
    }
   }
   this.viewContainerRef.createEmbeddedView(this.template,this.context);
  }

  public next(){
    this.Index++;
    this.context!.$implicit = this.imageList[this.Index];
  }

  public pre(){
    this.Index--;
    this.context!.$implicit = this.imageList[this.Index];
  }

}
