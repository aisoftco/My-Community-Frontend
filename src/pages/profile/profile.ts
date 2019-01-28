import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showConfirm() {
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
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
