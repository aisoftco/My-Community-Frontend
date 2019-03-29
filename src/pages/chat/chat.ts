import { EditChatRoomPage } from './../edit-chat-room/edit-chat-room';
import { ChatPrivatePage } from './../chat-private/chat-private';
import { GeolocationControlProvider } from './../../providers/geolocation-control/geolocation-control';
import { ChatProvider } from './../../providers/chat/chat';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  segment: string = 'peoples';
  chatRooms: Array<any> = [];
  users: Array<any> = [];
  currentUser: any = { photoURL: '../assets/imgs/man.png' };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider,
    public authenticationProvider: AuthenticationProvider,
    public chatProvider: ChatProvider,
    public geoProvider: GeolocationControlProvider
  ) {
    if (authenticationProvider.getCurrentUser()) {
      userProvider
        .getUser(authenticationProvider.getCurrentUser().uid)
        .valueChanges()
        .subscribe(
          currentUser => {
            this.currentUser = currentUser;
            this.fillUsers(currentUser);
            this.fillChatRooms(currentUser);
          },
          err => {
            console.log(err);
          }
        );
    }
  }
  fillUsers(currentUser) {
    this.userProvider
      .getUsers()
      .valueChanges()
      .subscribe(
        data => {
          this.users = [];
          data.forEach(user => {
            if (user.uid != currentUser.uid) {
              if (this.geoProvider.areNear(user, currentUser)) {
                this.users.push(user);
              }
            }
          });
        },
        err => {
          console.log(err);
        }
      );
  }
  fillChatRooms(currentUser) {
    this.chatProvider
      .getChats()
      .valueChanges()
      .subscribe(
        data => {
          this.chatRooms = [];
          data.forEach(chatRoom => {
            if (this.geoProvider.areNear(chatRoom, currentUser)) {
              this.chatRooms.push(chatRoom);
            }
          });
        },
        err => {
          console.log(err);
        }
      );
  }
  ionViewDidLoad() {}

  chatWith(user) {
    this.navCtrl.setRoot(ChatPrivatePage, {
      current: this.currentUser,
      other: user
    });
  }

  createChatRoom() {
    this.navCtrl.setRoot(EditChatRoomPage);
  }

  enterToChat(chatRoom) {
    this.navCtrl.setRoot(ChatPrivatePage, {
      current: this.currentUser,
      chatRoom: chatRoom
    });
  }
  goToProfile() {
    this.navCtrl.setRoot(ProfilePage);
  }
}
