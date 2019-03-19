import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoLogin(){
    this.navCtrl.setRoot(LoginPage)
  }
  goToRegister(){
    this.navCtrl.setRoot(SignupPage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
