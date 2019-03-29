import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {
  constructor(
    public http: HttpClient,
    private angularFireDatabase: AngularFireDatabase
  ) {}

  getEvents() {
    return this.angularFireDatabase.list('/events');
  }
}
