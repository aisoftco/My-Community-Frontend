import { ChatProvider } from './../../providers/chat/chat';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private authenticationProvider: AuthenticationProvider,
    private chatProvider: ChatProvider
  ) {
    chatProvider
      .getChat('chat1')
      .valueChanges()
      .subscribe(data => {
        this.chatRooms.push(data);
      });
    userProvider
      .getUser(authenticationProvider.getCurrentUser().uid)
      .valueChanges()
      .toPromise()
      .then(currentUser => {
        userProvider
          .getUsers()
          .valueChanges()
          .subscribe(
            data => {
              this.users = [];
              data.forEach(user => {
                if (user.uid != currentUser.uid) {
                  if (
                    this.distance(
                      user.latitude,
                      user.longitude,
                      currentUser.latitude,
                      currentUser.longitude,
                      'K'
                    ) <= 1
                  ) {
                    this.users.push(user);
                  }
                }
              });
            },
            err => {
              console.log(err);
            }
          );
      })
      .catch(err => {
        console.log(err);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  distance(lat1, lon1, lat2, lon2, unit) {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      const radlat1 = (Math.PI * lat1) / 180;
      const radlat2 = (Math.PI * lat2) / 180;
      const theta = lon1 - lon2;
      const radtheta = (Math.PI * theta) / 180;
      let dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == 'K') {
        dist = dist * 1.609344;
      }
      if (unit == 'N') {
        dist = dist * 0.8684;
      }
      return dist;
    }
  }
}
