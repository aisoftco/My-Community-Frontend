import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPrivatePage } from './chat-private';

@NgModule({
  declarations: [
    ChatPrivatePage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPrivatePage),
  ],
})
export class ChatPrivatePageModule {}
