import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

import { User } from '../shared/data/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _itemDocs?: AngularFirestoreCollection;
  public items?: Observable<any[]>;

  private _refDocs?: AngularFirestoreCollection;
  public refDocs?: Observable<any[]>;

  private _collectionName: string = environment.USERS;

  public userSubject = new Subject<User>();


  constructor(private _firestore: AngularFirestore, public authService: AuthService) { }

  getUser() {
    return (this.authService.firebaseUser) ? this._firestore.doc(this._collectionName + '/' + this.authService.firebaseUser.uid) : null;
  }

  getAll() {
    this._itemDocs = this._firestore.collection(this._collectionName);
    this.items = this._itemDocs.valueChanges({ idField: '_id' });
  }

}
