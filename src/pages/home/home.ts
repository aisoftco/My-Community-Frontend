import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPrivatePage } from '../chat-private/chat-private';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  LauchChat()
  {
  	this.navCtrl.push(ChatPrivatePage);
  }

}
