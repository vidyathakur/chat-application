import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/user/login/login.component';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   
   // AppRoutingModule,
    RouterModule.forRoot([
    {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'*', component:LoginComponent},
  {path:'**', component:LoginComponent}
    ]),
    ChatModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
