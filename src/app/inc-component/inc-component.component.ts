import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inc-component',
  templateUrl: './inc-component.component.html',
  styleUrl: './inc-component.component.css'
})

export class IncComponentComponent implements OnInit,AfterViewInit {

  @ViewChild('pTag',{read:ElementRef}) pTag?:ElementRef;

  public applist : string[]=['Ali','Saeed'];
  private _ic_RecordCount : number = 0;
  public p : number = 10;
  public set ic_RecordCount(clValue : number){
    this._ic_RecordCount = clValue;
  }

  get ic_RecordCount() : number{
    return this._ic_RecordCount;
  }



  constructor(private renderer : Renderer2){

  }
  ngAfterViewInit(): void {
//     let body = document.body;
// //    this.renderer.setStyle(body, 'color', 'red');
//      this.renderer.setStyle(this.pTag?.nativeElement,'color','red');


//      this.RecordOnClick();
//      this.RecordOnClick();
  }
  ngOnInit(): void {
    let _ic_RecordCount = 0;
  }

  RecordOnClick(){
    this._ic_RecordCount++;
  }


}
