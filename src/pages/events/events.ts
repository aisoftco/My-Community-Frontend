import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeolocationControlProvider } from '../../providers/geolocation-control/geolocation-control';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  //Declarando latitude y longitude
  latitude: number;
  longitude: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocationControlProvider: GeolocationControlProvider
  ) {
    geolocationControlProvider.updateCurrentuserLocation();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  getLocation() {}
}
