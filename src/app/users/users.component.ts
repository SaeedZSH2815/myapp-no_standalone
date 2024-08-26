import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-users]',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  uc_username : string = 'Admin';
  uc_password : string = 'Admin';

  SwitchProperty : string = 'Case Two';
  IsDisable: boolean = false;

  uc_Style = {};
  uc_Class = {};

  uc_ListRatio : string[]=["20","30"];

  productlist : any =[
    {
      id:1,
      ProductName:'Sport'
    },
  ];
  uc_userList : any =[

    {
      id:1,
      usname:'saeed'
    },

    {
      id:2,
      usname:'Ali'
    }


  ];

  ngOnInit(): void {

    this.uc_Style = {
     // 'color':'red'
     }

    this.uc_Class = {
      'big-font':true,
      'big-color':false

    }



  }




   public OnEventClick(clPN : string){
      console.log("Log :" + clPN);
    }

  public onInputChange(e : Event ){
    this.uc_username = (e.target as HTMLInputElement).value;
    console.log(e);
  }

  public onInputChange1(e : string ){
    this.uc_password = e;
    console.log(e);
  }


  trackbyFunc(index : number, item : any) {
    return item.id; // Use the 'id' property as the unique identifier
  }

  public btnOnClick(){
    this.uc_userList = [
      {
        id:1,
        usname:'saeed'
      },

      {
        id:2,
        usname:'Ali'
      },
      {
        id:3,
        usname:'reza'
      }
    ];
  }
}
