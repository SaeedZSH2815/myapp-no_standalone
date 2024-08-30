import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';


@Directive({
   selector: '[appPasswordLengthDetectorInput]'
 })

export class PasswordLengthDetectorInputDirective   implements AfterViewInit{

  constructor(private clRender : Renderer2,
              private clElement : ElementRef) {



  }

  ngAfterViewInit(): void {
      //this.clRender.setStyle(this.clElement.nativeElement,'color','red');
      //this.clRender.setStyle(this.clElement.nativeElement,'','red');
      this.clElement.nativeElement.value="red";
      this.clRender.setProperty(this.clElement.nativeElement,'value','dfs');
  }

}
