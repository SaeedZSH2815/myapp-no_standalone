import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {FormsModule} from '@angular/forms';
import { SwitchCaseOneComponent } from './switch-case-one/switch-case-one.component';
import { SwitchCaseTwoComponent } from './switch-case-two/switch-case-two.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SwitchCaseOneComponent,
    SwitchCaseTwoComponent
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
