import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {
  constructor(
    public http: HttpClient,
    private angularFireDatabase: AngularFireDatabase
  ) {}
  getChats() {
    return this.angularFireDatabase.list('/chat');
  }

  getChat(id) {
    return this.angularFireDatabase.object('/chats/' + id);
  }
}
