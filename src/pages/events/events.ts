import { EventProvider } from './../../providers/event/event';
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
  events: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocationControlProvider: GeolocationControlProvider,
    private eventProvider: EventProvider
  ) {
    geolocationControlProvider.updateCurrentuserLocation();
    eventProvider
      .getEvents()
      .valueChanges()
      .subscribe(
        data => {
          this.events = data;
        },
        error => {}
      );
  }
  ionViewDidLoad() {}

  getLocation() {}
}
