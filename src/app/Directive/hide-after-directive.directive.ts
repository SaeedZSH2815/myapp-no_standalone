import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideAfterDirective]'
})
export class HideAfterDirectiveDirective implements OnInit {

  private _value : number = 0;
  @Input() set appHideAfterDirective(clValue : number){
     this._value = clValue;
  }
  constructor(private clRender : Renderer2,
              private clElement : ElementRef,
              private view : ViewContainerRef,
              private template : TemplateRef<any>
            ) {



}

ngOnInit(): void {
    this.view.createEmbeddedView(this.template);
    setTimeout(() => {
      this.view.clear();
    }, 5000);
}



}
