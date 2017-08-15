import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'; 
import * as firebase from 'firebase'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth) { 
  }

  login() { 
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
