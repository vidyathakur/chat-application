import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ng6-toastr-notifications';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
     BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:'signup', component:SignupComponent}
    ])
  ]
})
export class UserModule { }
