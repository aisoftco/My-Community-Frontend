import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { UserProvider } from './../../providers/user/user';
import { GeolocationControlProvider } from './../../providers/geolocation-control/geolocation-control';
import { ChatProvider } from './../../providers/chat/chat';
import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TitleCasePipe } from '@angular/common';
import { User } from 'firebase';

/**
 * Generated class for the EditChatRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-chat-room',
  templateUrl: 'edit-chat-room.html'
})
export class EditChatRoomPage {
  name: string = '';
  description: string = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public chatProvider: ChatProvider,
    public userProvider: UserProvider,
    public authenticationProvider: AuthenticationProvider
  ) {}

  ionViewDidLoad() {}
  goToBack() {
    this.navCtrl.setRoot(ChatPage);
  }
  save() {
    this.userProvider
      .getUser(this.authenticationProvider.getCurrentUser().uid)
      .valueChanges()
      .subscribe(
        data => {
          const chat = {
            name: this.name,
            description: this.description,
            latitude: data.latitude,
            longitude: data.longitude
          };
          this.chatProvider
            .createChat(chat)
            .then(data => {
              this.goToBack();
            })
            .catch(err => {
              alert(err);
            });
        },
        err => {}
      );
  }
}
