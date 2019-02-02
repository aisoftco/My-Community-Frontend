import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AcountDetailsPage } from '../acount-details/acount-details';
import { ChangePasswordPage } from '../change-password/change-password';
import { TermAndConditionsPage } from '../term-and-conditions/term-and-conditions';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  openAcount(){
    this.navCtrl.push(AcountDetailsPage);
  }

  openChangepassword(){
    this.navCtrl.push(ChangePasswordPage);
  }

  openHome(){
    this.navCtrl.push(HomePage);
  }

  openTerm(){
    this.navCtrl.push(TermAndConditionsPage);
  }

  showConfirm(){
      const confirm = this.alertCtrl.create({
        title: 'Desea cerrar sesion ?',
        message: '',
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              console.log('Accion Cancelada');
            }
          },
          {
            text: 'Cancelar',
            handler: () => {
              console.log('Notificacion Enviada');
            }
          }
        ]
      });
      confirm.present();
    }
  }


