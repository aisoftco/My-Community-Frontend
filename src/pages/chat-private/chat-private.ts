import { Message } from './../../interfaces/message.interface';
import { ChatProvider } from './../../providers/chat/chat';
import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPrivatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-private',
  templateUrl: 'chat-private.html'
})
export class ChatPrivatePage {
  currentuser: any;
  chatKey: string;
  messages: Array<any> = [];
  message: string = '';
  title: string = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public chatProvider: ChatProvider
  ) {
    this.currentuser = this.navParams.get('current');
    const catRoom = this.navParams.get('chatRoom');
    if (catRoom) {
      this.title = catRoom.name;
      this.chatKey = catRoom.id;
    } else {
      this.title = this.currentuser.displayName;
      this.chatKey = chatProvider.getPrivateChatKey(
        this.currentuser,
        this.navParams.get('other')
      );
    }
    chatProvider
      .getMessageChat(this.chatKey)
      .valueChanges()
      .subscribe(
        data => {
          this.messages = [];
          if (data) {
            data.forEach((message: Message) => {
              if (message.uid == this.currentuser.uid) {
                message.clase = 'self';
              } else {
                message.clase = 'other';
              }
              this.messages.push(message);
            });
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  ionViewDidLoad() {}

  goToBack() {
    this.navCtrl.setRoot(ChatPage);
  }

  send() {
    const date = new Date();
    const Messagedata = {
      uPhotoURL: this.currentuser.photoURL,
      text: this.message + '',
      uid: this.currentuser.uid,
      time: date.getHours() + ':' + date.getMinutes(),
      read: false
    };
    this.chatProvider.setMessageChat(this.chatKey, Messagedata);
    this.message = '';
  }
}
