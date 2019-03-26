import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ToastController
} from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  photoURL: string;
  name: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private usersProvider: UsersProvider,
    private authenticationProvider: AuthenticationProvider
  ) {
    this.name = authenticationProvider.getCurrentUser().displayName;
    this.photoURL = authenticationProvider.getCurrentUser().photoURL;
  }
  showConfirm(position: string) {
    var text: boolean;
    const confirm = this.alertCtrl.create({
      title: 'Desea agregar esta persona?',
      message: 'Se le enviara un mensaje a la persona !!',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Accion Cancelada');
          }
        },
        {
          text: 'Agregar',
          handler: () => {
            console.log('Notificacion Enviada');
            if ((text = true)) {
              let toast = this.toastCtrl.create({
                message: 'Notification sent',
                duration: 4000,
                position: position
              });
              toast.present(toast);
            }
          }
        }
      ]
    });
    confirm.present();
  }
  logOut() {
    this.authenticationProvider.logOut();
  }
}
