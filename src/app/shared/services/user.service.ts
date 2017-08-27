import { AppUser } from '../models/app-user';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'; 

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): FirebaseObjectObservable<AppUser> { 
    return this.db.object('/users/' + uid);
  }
}
