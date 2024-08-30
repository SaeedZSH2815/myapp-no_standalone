import { Component, ViewEncapsulation } from '@angular/core';
import {BookTypeList} from '../book-type';

@Component({
  selector: '[app-book-type]',
  templateUrl: './book-type.component.html',
  styleUrl: './book-type.component.css',
  //encapsulation:ViewEncapsulation.None,
})
export class BookTypeComponent {

  bc_Styles = {
    'color' : 'red',
     'background-color':'white',
  };

  cb_BookTypeList : BookTypeList[] = [
    {
      BookCode : 1,
      BookName : 'Delphi'
    },
    {
      BookCode : 2,
      BookName : 'C#'
    },
  ];


 public UpdateUserList(clevent:BookTypeList[]){
   this.cb_BookTypeList = clevent;
 }
}
