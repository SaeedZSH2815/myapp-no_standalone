import { Component, OnInit, Input,numberAttribute, booleanAttribute, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrl: './product-type.component.css'
})
export class ProductTypeComponent implements OnInit {
   ngOnInit(): void {

   }
    @Input({ alias:'account-id', transform: numberAttribute }) id: number = 0;
    @Input({ alias : 'ProductName'})  pt_ProductName : string = "No Product";

    @Output() ProductClick = new EventEmitter<string>();



    public OnClick(cln : string){
      console.log(this.pt_ProductName);
      console.log(cln);
      this.ProductClick.emit(this.pt_ProductName);

    }



  }
