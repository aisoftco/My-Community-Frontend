import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ThanksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thanks',
  templateUrl: 'thanks.html',
})
export class ThanksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThanksPage');
  }
  goBackHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
