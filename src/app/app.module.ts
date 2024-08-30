import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {FormsModule} from '@angular/forms';
import { SwitchCaseOneComponent } from './switch-case-one/switch-case-one.component';
import { SwitchCaseTwoComponent } from './switch-case-two/switch-case-two.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductTypeComponent } from './product-type/product-type.component';
import { BookTypeComponent } from './book-type/book-type.component';
import { AddBookTypeComponent } from './add-book-type/add-book-type.component';
import { BookTypeTableListComponent } from './book-type-table-list/book-type-table-list.component';
import { IncComponentComponent } from './inc-component/inc-component.component';
import { SetBackgroundColorDirective } from './Directive/set-background-color.directive';
import { CarouselDirectiveDirective } from './Directive/carousel-directive.directive';
import { PasswordLengthDetectorInputDirective } from './Directive/password-length-detector-input.directive';
import { HideAfterDirectiveDirective } from './Directive/hide-after-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SwitchCaseOneComponent,
    SwitchCaseTwoComponent,
    ProductTypeComponent,
    BookTypeComponent,
    AddBookTypeComponent,
    BookTypeTableListComponent,
    IncComponentComponent,
    SetBackgroundColorDirective,
    CarouselDirectiveDirective,
    PasswordLengthDetectorInputDirective,
    HideAfterDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
