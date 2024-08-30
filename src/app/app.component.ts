import { AfterContentChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { IncComponentComponent } from './inc-component/inc-component.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit,AfterContentChecked {
   title = 'myapp-no_standalone';
   @ViewChild(IncComponentComponent,
              {read:IncComponentComponent}) incComp? : IncComponentComponent;

 public ngAfterViewInit(): void {
   //this.incComp?.RecordOnClick();
 }
 public ngAfterContentChecked(): void {
  this.incComp?.RecordOnClick();
 }
}
