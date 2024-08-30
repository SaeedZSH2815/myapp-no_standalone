import { Component, Input } from '@angular/core';
import { BookTypeList } from '../book-type';

@Component({
  selector: 'app-book-type-table-list',
  templateUrl: './book-type-table-list.component.html',
  styleUrl: './book-type-table-list.component.css'
})
export class BookTypeTableListComponent {

   @Input() btlc_BookList : BookTypeList[] = [];

}
