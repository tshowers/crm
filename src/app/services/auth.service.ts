import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public firebaseUser?: firebase.User;
  public loggedInUser = new Subject<firebase.User>();

  public errorMessage = new Subject<string>();

  constructor(private _afAuth: AngularFireAuth, private _afs: AngularFirestore) { 
    this.checkFirebase();
  }

  private checkFirebase() {
    try {
      this._afAuth.onAuthStateChanged(firebaseUser => {
        this.firebaseUser = firebaseUser!;
        this.loggedInUser.next(this.firebaseUser);

        if (!environment.production)
          console.log("Auth State Change", firebaseUser);
      });
    } catch (error) {
      console.error("Auth Change", error);
    }
  }

}
