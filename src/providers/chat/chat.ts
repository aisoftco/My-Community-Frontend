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

  getMessageChat(id) {
    return this.angularFireDatabase.list('/chats/' + id + '/messages');
  }
  setMessageChat(id, message) {
    return this.angularFireDatabase
      .object(
        '/chats/' + id + '/messages/' + this.angularFireDatabase.createPushId()
      )
      .set(message);
  }

  getPrivateChatKey(current, other) {
    let users = [current.uid, other.uid];
    users.sort();
    return users[0] + '-' + users[1];
  }

  setMessagePrivateChat(current, other, message) {
    let users = [current.uid, other.uid];
    users.sort();
    return this.setMessageChat(users[0] + '-' + users[1], message);
  }
}
