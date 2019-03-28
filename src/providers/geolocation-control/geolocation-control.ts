import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProvider } from '../user/user';
import { AuthenticationProvider } from '../authentication/authentication';

/*
  Generated class for the GeolocationControlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeolocationControlProvider {
  constructor(
    public http: HttpClient,
    private geolocation: Geolocation,
    private userProvider: UserProvider,
    private authenticationProvider: AuthenticationProvider
  ) {}

  updateCurrentuserLocation() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        const userLocation = {
          uid: this.authenticationProvider.getCurrentUser().uid,
          latitude: resp.coords.latitude,
          longitude: resp.coords.longitude
        };
        this.userProvider.editUser(userLocation).catch(error => {});
      })
      .catch(error => {});
  }
}
