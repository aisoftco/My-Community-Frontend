import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
//Declarando latitude y longitude
latitude:number;
longitude:number;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  getLocation(){

this.geolocation.getCurrentPosition().then((resp) => {
this.latitude=resp.coords.latitude;
this.longitude=resp.coords.longitude

}).catch((error) => {
console.log('Error getting location', error);
});

}

}
