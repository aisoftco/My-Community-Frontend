import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { SignupPage } from './../signup/signup';
import { DireccionPage } from '../direccion/direccion';
import { ThanksPage } from '../thanks/thanks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }



  goToLogin(){
    this.navCtrl.setRoot(LoginPage)
  }

  goToSignup(){
    this.navCtrl.setRoot(SignupPage)
  }

  goToDireccion(){
    this.navCtrl.setRoot(DireccionPage)
  }
  goToThanks(){
    this.navCtrl.setRoot(ThanksPage)
  }
}
