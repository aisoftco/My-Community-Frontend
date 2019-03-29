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

  calculateDistance(other, current) {
    const lat1 = other.latitude,
      lon1 = other.longitude,
      lat2 = current.latitude,
      lon2 = current.longitude;
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      const radlat1 = (Math.PI * lat1) / 180;
      const radlat2 = (Math.PI * lat2) / 180;
      const theta = lon1 - lon2;
      const radtheta = (Math.PI * theta) / 180;
      let dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      return dist * 1.609344;
    }
  }

  areNear(other, current) {
    return this.calculateDistance(other, current) <= 0.1;
  }
}
