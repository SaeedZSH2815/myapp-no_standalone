import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { window } from 'rxjs';


@Directive({
   selector: '[appPasswordLengthDetectorInput]'
 })

export class PasswordLengthDetectorInputDirective   implements AfterViewInit{

  private _DefaultValue? : string;

  @Input() set DefaultValue(clValue : string){
    this._DefaultValue = clValue;
  }
  constructor(private clRender : Renderer2,
              private clElement : ElementRef) {



  }

  ngAfterViewInit(): void {
      //this.clRender.setStyle(this.clElement.nativeElement,'color','red');
      //this.clRender.setStyle(this.clElement.nativeElement,'','red');
      //this.clElement.nativeElement.value="red";
      this.clRender.setProperty(this.clElement.nativeElement,'value',this._DefaultValue!);
  }


  @HostListener('window:keyup',['$event']) OnKeyUp(event:KeyboardEvent){
     console.log(event);
     if(this.clElement.nativeElement.value.length >= 5)
      this.clRender.setStyle(this.clElement.nativeElement,'backgroundColor','red');
     else
      this.clRender.setStyle(this.clElement.nativeElement,'backgroundColor','white');
  }
}
