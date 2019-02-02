import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  passwordType: string = 'password';
  passwordShow: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public showPassword(){
    if(this.passwordShow){
      this.passwordShow = false;
      this.passwordType = 'password';
    } else{
      this.passwordShow = false;
      this.passwordType = 'password';

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

}
