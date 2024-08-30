import { Component, EventEmitter, Output,Input } from '@angular/core';
import { BookTypeList } from '../book-type';

@Component({
  selector: 'app-add-book-type',
  templateUrl: './add-book-type.component.html',
  styleUrl: './add-book-type.component.css'
})
export class AddBookTypeComponent {

  @Output() AddUserEvent = new EventEmitter<BookTypeList[]>();
  @Input()  cb_BookTypeList : BookTypeList[] = [];

  bc_Styles = {
    'color' : 'red',
     'background-color':'white',
  };



  public btnSaveBookClick(clBookName:string,clBookId :string,clevent:Event){
    clevent.preventDefault();
    console.log("");
     let LBookType : BookTypeList =
         {
          BookCode:Number(clBookId),
          BookName:clBookName
        };
     this.cb_BookTypeList.push(LBookType);
     this.AddUserEvent.emit(this.cb_BookTypeList);
   }

}
