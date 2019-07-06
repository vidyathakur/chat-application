import { ChatRoutGuardGuard } from './chat-rout-guard.guard';
import { RemoveSpecialCharPipe } from 'src/app/shared/pipe/remove-special-char.pipe';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [ChatBoxComponent, RemoveSpecialCharPipe],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'chat', component:ChatBoxComponent, canActivate:[ChatRoutGuardGuard]}
    ]),
    SharedModule
  ],
  providers:[ChatRoutGuardGuard]
})
export class ChatModule { }
